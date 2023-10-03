import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { trackCCTX } from "../helpers";

declare const hre: any;

const main = async (args: any, hre: HardhatRuntimeEnvironment) => {
  await trackCCTX(args.tx);
};

export const cctxTask = task(
  "cctx",
  "Track cross-chain transaction status",
  main
)
  .addPositionalParam("tx", "Hash of an inbound or a cross-chain transaction")
  .addFlag("json", "Output as JSON");
