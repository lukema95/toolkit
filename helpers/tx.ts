import { getEndpoints } from "@zetachain/networks";
import { getHardhatConfigNetworks } from "@zetachain/networks";
import axios from "axios";
import clc from "cli-color";
import { ethers } from "ethers";
import Spinnies from "spinnies";

const getEndpoint = (key: any): string => {
  const endpoint = getEndpoints(key, "zeta_testnet")[0]?.url;
  if (!endpoint) {
    throw new Error(`getEndpoints: ${key} endpoint not found`);
  }
  return endpoint;
};

const findByChainId = (config: any, targetChainId: Number): Object | null => {
  for (const key in config) {
    if (config.hasOwnProperty(key) && config[key].hasOwnProperty("chainId")) {
      if (config[key].chainId === targetChainId) {
        return config[key];
      }
    }
  }
  return null;
};

const fetchCCTXByInbound = async (
  hash: string,
  spinnies: any,
  API: string,
  cctxList: any,
  json: Boolean
) => {
  try {
    const url = `${API}/zeta-chain/crosschain/inTxHashToCctx/${hash}`;
    const apiResponse = await axios.get(url);
    const res = apiResponse?.data?.inTxHashToCctx?.cctx_index;
    res.forEach((cctxHash: any) => {
      if (
        cctxHash &&
        !cctxList[cctxHash] &&
        !spinnies.spinners[`spinner-${cctxHash}`]
      ) {
        cctxList[cctxHash] = [];
        if (!json) {
          spinnies.add(`spinner-${cctxHash}`, {
            text: `${cctxHash}`,
          });
        }
      }
    });
  } catch (error) {}
};

const fetchCCTXData = async (
  cctxHash: string,
  spinnies: any,
  API: string,
  cctxList: any,
  pendingNonces: any,
  json: Boolean
) => {
  const networks = getHardhatConfigNetworks();
  const cctx = await getCCTX(cctxHash, API);
  const receiver_chainId = cctx?.outbound_tx_params[0]?.receiver_chainId;
  const outbound_tx_hash = cctx?.outbound_tx_params[0]?.outbound_tx_hash;
  let confirmed_on_destination = false;
  if (outbound_tx_hash) {
    const rpc = findByChainId(networks, parseInt(receiver_chainId))?.url;
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const confirmed = await provider.getTransaction(outbound_tx_hash);
    confirmed_on_destination = confirmed !== null;
  }
  const tx = {
    confirmed_on_destination,
    outbound_tx_hash,
    outbound_tx_tss_nonce: cctx?.outbound_tx_params[0]?.outbound_tx_tss_nonce,
    receiver_chainId,
    sender_chain_id: cctx?.inbound_tx_params?.sender_chain_id,
    status: cctx?.cctx_status?.status,
    status_message: cctx?.cctx_status?.status_message,
  };
  const lastCCTX = cctxList[cctxHash][cctxList[cctxHash].length - 1];
  const isEmpty = cctxList[cctxHash].length === 0;
  const statusDefined =
    tx.status !== undefined && tx.status_message !== undefined;
  if (isEmpty || (statusDefined && lastCCTX.status !== tx.status)) {
    cctxList[cctxHash].push(tx);
    const sender = cctxList[cctxHash]?.[0].sender_chain_id;
    const receiver = cctxList[cctxHash]?.[0].receiver_chainId;
    let queue;
    if (pendingNonces) {
      const pending = pendingNonces.find(
        (n: any) => n.chain_id === tx.receiver_chainId
      )?.nonce_low;
      const current = tx.outbound_tx_tss_nonce;
      queue = current > pending ? ` (${current - pending} in queue)` : "";
    }
    const path = cctxList[cctxHash]
      .map(
        (x: any) =>
          `${clc.bold.underline(x.status)} ${
            x.status_message && "(" + x.status_message + ")"
          }`
      )
      .join(" → ");
    const text = {
      text: `${cctxHash}: ${sender} → ${receiver}${queue}: ${path}`,
    };
    const id = `spinner-${cctxHash}`;
    if (!json && spinnies.spinners[id]) {
      const s = tx.status;
      if (s == "OutboundMined" || s == "Reverted") {
        spinnies.succeed(id, text);
      } else if (s == "Aborted") {
        spinnies.fail(id, text);
      } else {
        spinnies.update(id, text);
      }
    }
  }
};

const getCCTX = async (hash: string, API: string) => {
  try {
    const url = `${API}/zeta-chain/crosschain/cctx/${hash}`;
    const apiResponse = await axios.get(url);
    return apiResponse?.data?.CrossChainTx;
  } catch (e) {}
};

const fetchNonces = async (API: string, TSS: string) => {
  try {
    const url = `${API}/zeta-chain/crosschain/pendingNonces`;
    const apiResponse = await axios.get(url);
    const nonces = apiResponse?.data?.pending_nonces;
    return nonces.filter((n: any) => n.tss === TSS);
  } catch (e) {}
};

const fetchTSS = async (API: string) => {
  try {
    const url = `${API}/zeta-chain/crosschain/TSS`;
    const apiResponse = await axios.get(url);
    return apiResponse?.data?.TSS.tss_pubkey;
  } catch (e) {}
};

export const trackCCTX = async (
  hash: string,
  json: Boolean = false
): Promise<void> => {
  const spinnies = new Spinnies();

  const API = getEndpoint("cosmos-http");
  const TSS = await fetchTSS(API);

  return new Promise((resolve, reject) => {
    let cctxList: any = {};
    let pendingNonces: any = [];

    const loopInterval = setInterval(async () => {
      pendingNonces = await fetchNonces(API, TSS);
      if (Object.keys(cctxList).length === 0) {
        if (!json) {
          spinnies.add(`search`, {
            text: `Looking for cross-chain transactions (CCTXs) on ZetaChain...\n`,
          });
        }
        await fetchCCTXByInbound(hash, spinnies, API, cctxList, json);
      }
      if (Object.keys(cctxList).length === 0 && !cctxList[hash]) {
        if ((await getCCTX(hash, API)) && !cctxList[hash]) {
          cctxList[hash] = [];
          if (!spinnies.spinners[`spinner-${hash}`] && !json) {
            spinnies.add(`spinner-${hash}`, {
              text: `${hash}`,
            });
          }
        }
      }
      for (const txHash in cctxList) {
        await fetchCCTXByInbound(txHash, spinnies, API, cctxList, json);
      }
      if (Object.keys(cctxList).length > 0) {
        if (spinnies.spinners["search"] && !json) {
          spinnies.succeed(`search`, {
            text: `CCTXs on ZetaChain found.\n`,
          });
        }
        for (const cctxHash in cctxList) {
          try {
            fetchCCTXData(
              cctxHash,
              spinnies,
              API,
              cctxList,
              pendingNonces,
              json
            );
          } catch (error) {}
        }
      }
      if (
        Object.keys(cctxList).length > 0 &&
        Object.keys(cctxList)
          .map((c: any) => {
            const last = cctxList[c][cctxList[c].length - 1];
            return last?.status;
          })
          .filter((s) => !["OutboundMined", "Aborted", "Reverted"].includes(s))
          .length === 0
      ) {
        const allOutboundMined = Object.keys(cctxList)
          .map((c: any) => {
            const last = cctxList[c][cctxList[c].length - 1];
            return last?.status;
          })
          .every((s) => s === "OutboundMined");

        if (!allOutboundMined) {
          reject("CCTX aborted or reverted");
        } else {
          if (json) console.log(JSON.stringify(cctxList, null, 2));
          resolve();
        }
      }
    }, 3000);
  });
};
