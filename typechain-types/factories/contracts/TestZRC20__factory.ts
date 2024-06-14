/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestZRC20, TestZRC20Interface } from "../../contracts/TestZRC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "bytesToAddress",
    outputs: [
      {
        internalType: "address",
        name: "output",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "to",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawGasFee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f6838038062001f6883398181016040528101906200003791906200037b565b818181600390805190602001906200005192919062000236565b5080600490805190602001906200006a92919062000236565b505050620000ac3362000082620000b560201b60201c565b60ff16600a620000939190620005b4565b85620000a09190620006f1565b620000be60201b60201c565b50505062000900565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000128906200044d565b60405180910390fd5b62000145600083836200022c60201b60201c565b8060026000828254620001599190620004fc565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200020c91906200046f565b60405180910390a362000228600083836200023160201b60201c565b5050565b505050565b505050565b828054620002449062000792565b90600052602060002090601f016020900481019282620002685760008555620002b4565b82601f106200028357805160ff1916838001178555620002b4565b82800160010185558215620002b4579182015b82811115620002b357825182559160200191906001019062000296565b5b509050620002c39190620002c7565b5090565b5b80821115620002e2576000816000905550600101620002c8565b5090565b6000620002fd620002f784620004b5565b6200048c565b9050828152602081018484840111156200031c576200031b62000890565b5b620003298482856200075c565b509392505050565b600082601f8301126200034957620003486200088b565b5b81516200035b848260208601620002e6565b91505092915050565b6000815190506200037581620008e6565b92915050565b6000806000606084860312156200039757620003966200089a565b5b6000620003a78682870162000364565b935050602084015167ffffffffffffffff811115620003cb57620003ca62000895565b5b620003d98682870162000331565b925050604084015167ffffffffffffffff811115620003fd57620003fc62000895565b5b6200040b8682870162000331565b9150509250925092565b600062000424601f83620004eb565b91506200043182620008bd565b602082019050919050565b620004478162000752565b82525050565b60006020820190508181036000830152620004688162000415565b9050919050565b60006020820190506200048660008301846200043c565b92915050565b600062000498620004ab565b9050620004a68282620007c8565b919050565b6000604051905090565b600067ffffffffffffffff821115620004d357620004d26200085c565b5b620004de826200089f565b9050602081019050919050565b600082825260208201905092915050565b6000620005098262000752565b9150620005168362000752565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200054e576200054d620007fe565b5b828201905092915050565b6000808291508390505b6001851115620005ab57808604811115620005835762000582620007fe565b5b6001851615620005935780820291505b8081029050620005a385620008b0565b945062000563565b94509492505050565b6000620005c18262000752565b9150620005ce8362000752565b9250620005fd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000605565b905092915050565b600082620006175760019050620006ea565b81620006275760009050620006ea565b81600181146200064057600281146200064b5762000681565b6001915050620006ea565b60ff84111562000660576200065f620007fe565b5b8360020a9150848211156200067a5762000679620007fe565b5b50620006ea565b5060208310610133831016604e8410600b8410161715620006bb5782820a905083811115620006b557620006b4620007fe565b5b620006ea565b620006ca848484600162000559565b92509050818404811115620006e457620006e3620007fe565b5b81810290505b9392505050565b6000620006fe8262000752565b91506200070b8362000752565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007475762000746620007fe565b5b828202905092915050565b6000819050919050565b60005b838110156200077c5780820151818401526020810190506200075f565b838111156200078c576000848401525b50505050565b60006002820490506001821680620007ab57607f821691505b60208210811415620007c257620007c16200082d565b5b50919050565b620007d3826200089f565b810181811067ffffffffffffffff82111715620007f557620007f46200085c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620008f18162000752565b8114620008fd57600080fd5b50565b61165880620009106000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806347e7ef2411610097578063a9059cbb11610066578063a9059cbb146102c2578063c7012626146102f2578063d9eeebed14610322578063dd62ed3e14610341576100f5565b806347e7ef241461021457806370a082311461024457806395d89b4114610274578063a457c2d714610292576100f5565b806323b872dd116100d357806323b872dd146101665780632c27d3ab14610196578063313ce567146101c657806339509351146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610371565b60405161010f91906110c0565b60405180910390f35b610132600480360381019061012d9190610de3565b610403565b60405161013f91906110a5565b60405180910390f35b610150610426565b60405161015d91906111c2565b60405180910390f35b610180600480360381019061017b9190610d90565b610430565b60405161018d91906110a5565b60405180910390f35b6101b060048036038101906101ab9190610e83565b61045f565b6040516101bd9190611061565b60405180910390f35b6101ce6104d3565b6040516101db91906111dd565b60405180910390f35b6101fe60048036038101906101f99190610de3565b6104dc565b60405161020b91906110a5565b60405180910390f35b61022e60048036038101906102299190610de3565b610513565b60405161023b91906110a5565b60405180910390f35b61025e60048036038101906102599190610d23565b61051f565b60405161026b91906111c2565b60405180910390f35b61027c610567565b60405161028991906110c0565b60405180910390f35b6102ac60048036038101906102a79190610de3565b6105f9565b6040516102b991906110a5565b60405180910390f35b6102dc60048036038101906102d79190610de3565b610670565b6040516102e991906110a5565b60405180910390f35b61030c60048036038101906103079190610e23565b610693565b60405161031991906110a5565b60405180910390f35b61032a6106b8565b60405161033892919061107c565b60405180910390f35b61035b60048036038101906103569190610d50565b6106c6565b60405161036891906111c2565b60405180910390f35b6060600380546103809061132d565b80601f01602080910402602001604051908101604052809291908181526020018280546103ac9061132d565b80156103f95780601f106103ce576101008083540402835291602001916103f9565b820191906000526020600020905b8154815290600101906020018083116103dc57829003601f168201915b5050505050905090565b60008061040e61074d565b905061041b818585610755565b600191505092915050565b6000600254905090565b60008061043b61074d565b9050610448858285610920565b6104538585856109ac565b60019150509392505050565b600080858585908587610472919061124f565b9261047f93929190611214565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905082810151915050949350505050565b60006012905090565b6000806104e761074d565b90506105088185856104f985896106c6565b610503919061124f565b610755565b600191505092915050565b60006001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105769061132d565b80601f01602080910402602001604051908101604052809291908181526020018280546105a29061132d565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b5050505050905090565b60008061060461074d565b9050600061061282866106c6565b905083811015610657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064e906111a2565b60405180910390fd5b6106648286868403610755565b60019250505092915050565b60008061067b61074d565b90506106888185856109ac565b600191505092915050565b6000806106a28585600c610c24565b90506106ae8184610670565b9150509392505050565b600080306000915091509091565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107bc90611182565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c90611102565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161091391906111c2565b60405180910390a3505050565b600061092c84846106c6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109a65781811015610998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098f90611122565b60405180910390fd5b6109a58484848403610755565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1390611162565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a83906110e2565b60405180910390fd5b610a97838383610c99565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1490611142565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c0b91906111c2565b60405180910390a3610c1e848484610c9e565b50505050565b60008084848490601486610c38919061124f565b92610c4593929190611214565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060148101519150509392505050565b505050565b505050565b600081359050610cb2816115f4565b92915050565b60008083601f840112610cce57610ccd6113c2565b5b8235905067ffffffffffffffff811115610ceb57610cea6113bd565b5b602083019150836001820283011115610d0757610d066113d1565b5b9250929050565b600081359050610d1d8161160b565b92915050565b600060208284031215610d3957610d386113db565b5b6000610d4784828501610ca3565b91505092915050565b60008060408385031215610d6757610d666113db565b5b6000610d7585828601610ca3565b9250506020610d8685828601610ca3565b9150509250929050565b600080600060608486031215610da957610da86113db565b5b6000610db786828701610ca3565b9350506020610dc886828701610ca3565b9250506040610dd986828701610d0e565b9150509250925092565b60008060408385031215610dfa57610df96113db565b5b6000610e0885828601610ca3565b9250506020610e1985828601610d0e565b9150509250929050565b600080600060408486031215610e3c57610e3b6113db565b5b600084013567ffffffffffffffff811115610e5a57610e596113d6565b5b610e6686828701610cb8565b93509350506020610e7986828701610d0e565b9150509250925092565b60008060008060608587031215610e9d57610e9c6113db565b5b600085013567ffffffffffffffff811115610ebb57610eba6113d6565b5b610ec787828801610cb8565b94509450506020610eda87828801610d0e565b9250506040610eeb87828801610d0e565b91505092959194509250565b610f00816112a5565b82525050565b610f0f816112b7565b82525050565b6000610f20826111f8565b610f2a8185611203565b9350610f3a8185602086016112fa565b610f43816113e0565b840191505092915050565b6000610f5b602383611203565b9150610f66826113f1565b604082019050919050565b6000610f7e602283611203565b9150610f8982611440565b604082019050919050565b6000610fa1601d83611203565b9150610fac8261148f565b602082019050919050565b6000610fc4602683611203565b9150610fcf826114b8565b604082019050919050565b6000610fe7602583611203565b9150610ff282611507565b604082019050919050565b600061100a602483611203565b915061101582611556565b604082019050919050565b600061102d602583611203565b9150611038826115a5565b604082019050919050565b61104c816112e3565b82525050565b61105b816112ed565b82525050565b60006020820190506110766000830184610ef7565b92915050565b60006040820190506110916000830185610ef7565b61109e6020830184611043565b9392505050565b60006020820190506110ba6000830184610f06565b92915050565b600060208201905081810360008301526110da8184610f15565b905092915050565b600060208201905081810360008301526110fb81610f4e565b9050919050565b6000602082019050818103600083015261111b81610f71565b9050919050565b6000602082019050818103600083015261113b81610f94565b9050919050565b6000602082019050818103600083015261115b81610fb7565b9050919050565b6000602082019050818103600083015261117b81610fda565b9050919050565b6000602082019050818103600083015261119b81610ffd565b9050919050565b600060208201905081810360008301526111bb81611020565b9050919050565b60006020820190506111d76000830184611043565b92915050565b60006020820190506111f26000830184611052565b92915050565b600081519050919050565b600082825260208201905092915050565b60008085851115611228576112276113cc565b5b83861115611239576112386113c7565b5b6001850283019150848603905094509492505050565b600061125a826112e3565b9150611265836112e3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561129a5761129961135f565b5b828201905092915050565b60006112b0826112c3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156113185780820151818401526020810190506112fd565b83811115611327576000848401525b50505050565b6000600282049050600182168061134557607f821691505b602082108114156113595761135861138e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6115fd816112a5565b811461160857600080fd5b50565b611614816112e3565b811461161f57600080fd5b5056fea2646970667358221220a0d27e0d4182ceeb4277fe6461e9f2e755fd3888df5f433041010e5ca74d9c2464736f6c63430008070033";

type TestZRC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestZRC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestZRC20__factory extends ContractFactory {
  constructor(...args: TestZRC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestZRC20> {
    return super.deploy(
      initialSupply,
      name,
      symbol,
      overrides || {}
    ) as Promise<TestZRC20>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialSupply,
      name,
      symbol,
      overrides || {}
    );
  }
  override attach(address: string): TestZRC20 {
    return super.attach(address) as TestZRC20;
  }
  override connect(signer: Signer): TestZRC20__factory {
    return super.connect(signer) as TestZRC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestZRC20Interface {
    return new utils.Interface(_abi) as TestZRC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestZRC20 {
    return new Contract(address, _abi, signerOrProvider) as TestZRC20;
  }
}
