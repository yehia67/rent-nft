// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    owner: ctc0,
    renter: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    rentAmount: ctc3,
    renter: ctc0
    });
  const ctc5 = stdlib.T_Object({
    hasPayed: ctc2,
    rent: ctc4
    });
  
  
  const v49 = stdlib.protect(ctc1, await interact.getNftById(stdlib.checkedBigNumberify('./index.rsh:47:55:decimal', stdlib.UInt_max, 0)), {
    at: './index.rsh:47:54:application',
    fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:17:function exp)'],
    msg: 'getNftById',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v49],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Renter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Renter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Renter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    owner: ctc0,
    renter: ctc0
    });
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    nftId: ctc3,
    rentAmount: ctc3,
    renter: ctc0
    });
  const ctc5 = stdlib.T_Object({
    hasPayed: ctc2,
    rent: ctc4
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
  ;
  const v56 = stdlib.protect(ctc5, await interact.getRenterPaymentByDate(stdlib.checkedBigNumberify('./index.rsh:53:71:decimal', stdlib.UInt_max, 0)), {
    at: './index.rsh:53:70:application',
    fs: ['at ./index.rsh:52:14:application call to [unknown function] (defined at: ./index.rsh:52:18:function exp)'],
    msg: 'getRenterPaymentByDate',
    who: 'Renter'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v56],
    evt_cnt: 1,
    funcNum: 1,
    lct: v52,
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACUjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABAKuozc0/1CwQgAxSCI0ARJENARJIhJMNAISEURJNQU1/4AESvGRhjT/ULCBoI0GiABjIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_renter",
                    "type": "address"
                  }
                ],
                "internalType": "struct T1",
                "name": "v51",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_renter",
                    "type": "address"
                  }
                ],
                "internalType": "struct T1",
                "name": "v51",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_hasPayed",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_nftId",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_rentAmount",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "_renter",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_rent",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_hasPayed",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "_nftId",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "_rentAmount",
                        "type": "uint256"
                      },
                      {
                        "internalType": "address payable",
                        "name": "_renter",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_rent",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610730380380610730833981016040819052610022916101dc565b600080554360035560408051825181526020808401515180516001600160a01b0390811683850152910151168183015290517f4c2569059f83e3f2a79613fb8029da48996651a57792933356858395601f07a19181900360600190a161008a341560076100c8565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100c09260029201906100f1565b5050506102b9565b816100ed5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100fd9061027e565b90600052602060002090601f01602090048101928261011f5760008555610165565b82601f1061013857805160ff1916838001178555610165565b82800160010185558215610165579182015b8281111561016557825182559160200191906001019061014a565b50610171929150610175565b5090565b5b808211156101715760008155600101610176565b604080519081016001600160401b03811182821017156101ba57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146101d757600080fd5b919050565b600081830360608112156101ef57600080fd5b6101f761018a565b835181526040601f198301121561020d57600080fd5b6040519150602082016001600160401b038111838210171561023f57634e487b7160e01b600052604160045260246000fd5b60405261024a61018a565b610256602086016101c0565b8152610264604086016101c0565b602082015280835250816020820152809250505092915050565b600181811c9082168061029257607f821691505b602082108114156102b357634e487b7160e01b600052602260045260246000fd5b50919050565b610468806102c86000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063db242394146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b6040516100649291906102fc565b6100476100b3366004610359565b610155565b6000606060005460028080546100cd90610371565b80601f01602080910402602001604051908101604052809291908181526020018280546100f990610371565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b6101656001600054146009610281565b61017f8135158061017857506001548235145b600a610281565b60008080556002805461019190610371565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd90610371565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b505050505080602001905181019061022291906103b4565b90507f0bd60a32bbfd2d84c54f9964eb6fcdae682718087fb896c9ee83d578ca61cbe98260405161025391906103d8565b60405180910390a161026734156008610281565b6000808055600181905561027d906002906102a6565b5050565b8161027d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b290610371565b6000825580601f106102c2575050565b601f0160209004906000526020600020908101906102e091906102e3565b50565b5b808211156102f857600081556001016102e4565b5090565b82815260006020604081840152835180604085015260005b8181101561033057858101830151858201606001528201610314565b81811115610342576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561036b57600080fd5b50919050565b600181811c9082168061038557607f821691505b6020821081141561036b57634e487b7160e01b600052602260045260246000fd5b80151581146102e057600080fd5b6000602082840312156103c657600080fd5b81516103d1816103a6565b9392505050565b8135815260a0810160208301356103ee816103a6565b15156020830152604083810135908301526060808401359083015260808301356001600160a01b03811680821461042457600080fd5b80608085015250509291505056fea2646970667358221220bf419a276c8f6f1d7df7b8515119256f5e3773b19947091321e8f624fc15c0ac64736f6c634300080c0033`,
  BytecodeLen: 1840,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Owner": Owner,
  "Renter": Renter
  };
export const _APIs = {
  };
