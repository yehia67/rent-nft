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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    nftId: ctc1,
    rentAmount: ctc1,
    renter: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    hasPayed: ctc5,
    rent: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc7;
  
  
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    nftId: ctc1,
    rentAmount: ctc1,
    renter: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    hasPayed: ctc5,
    rent: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc4, ctc7]);
  return {
    mapDataTy: ctc8
    };
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    nftId: ctc1,
    rentAmount: ctc1,
    renter: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    hasPayed: ctc5,
    rent: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v39, time: v38, didSend: v22, from: v37 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v39, time: v38, didSend: v22, from: v37 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v42, time: v41, didSend: v26, from: v40 } = txn2;
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    nftId: ctc1,
    rentAmount: ctc1,
    renter: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    hasPayed: ctc5,
    rent: ctc3
    });
  const ctc7 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc7;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v39, time: v38, didSend: v22, from: v37 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    lct: v38,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v42, time: v41, didSend: v26, from: v40 } = txn2;
      
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
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v42, time: v41, didSend: v26, from: v40 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1yhkSSJbNQGBCFs1AjEZIxJBAAwxAIABAIFjr2ZCAKE2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAAdIxJEIzQBEkQ0BEkiEkw0AhIRRIAEmouRdLBCAClIIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiABjIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 99,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
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
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
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
                "internalType": "struct T0",
                "name": "_rent",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "res",
        "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
  Bytecode: `0x6080604052604051610a8b380380610a8b83398101604081905261002291610175565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a1610075341560076100b3565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100ab9260029201906100dc565b505050610218565b816100d85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e8906101dd565b90600052602060002090601f01602090048101928261010a5760008555610150565b82601f1061012357805160ff1916838001178555610150565b82800160010185558215610150579182015b82811115610150578251825591602001919060010190610135565b5061015c929150610160565b5090565b5b8082111561015c5760008155600101610161565b60006040828403121561018757600080fd5b604080519081016001600160401b03811182821017156101b757634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146101d157600080fd5b60208201529392505050565b600181811c908216806101f157607f821691505b6020821081141561021257634e487b7160e01b600052602260045260246000fd5b50919050565b610864806102276000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780633bc5b7bf1461009657806383230757146100c3578063ab53f2c6146100d8578063cadc2e7a146100fb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461062f565b610128565b3480156100a257600080fd5b506100b66100b1366004610647565b610254565b60405161007a91906106ab565b3480156100cf57600080fd5b50600154610070565b3480156100e457600080fd5b506100ed610299565b60405161007a9291906106f7565b34801561010757600080fd5b5061011b610116366004610647565b610336565b60405161007a9190610754565b6101386001600054146009610347565b6101528135158061014b57506001548235145b600a610347565b600080805560028054610164906107a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610190906107a9565b80156101dd5780601f106101b2576101008083540402835291602001916101dd565b820191906000526020600020905b8154815290600101906020018083116101c057829003601f168201915b50505050508060200190518101906101f591906107ec565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516102269190610809565b60405180910390a161023a34156008610347565b6000808055600181905561025090600290610574565b5050565b61028a60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6102938261036c565b92915050565b6000606060005460028080546102ae906107a9565b80601f01602080910402602001604051908101604052809291908181526020018280546102da906107a9565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b50505050509050915091509091565b61033e6105b6565b61029382610482565b816102505760405163100960cb60e01b81526004810182905260240160405180910390fd5b6103a260408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156103d1576103d1610677565b1415610473576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561041257610412610677565b600181111561042357610423610677565b81528154610100900460ff16151560208083019190915260408051606081018252600185015481526002850154928101929092526003909301546001600160a01b03168184015291015292915050565b60008082526020820152919050565b61048a6105b6565b60016001600160a01b03831660009081526005602052604090205460ff1660018111156104b9576104b9610677565b1415610473576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156104fa576104fa610677565b600181111561050b5761050b610677565b81528154610100900460ff90811615156020808401919091526040805180820182526001860154909316151583528051606081018252600286015481526003860154818401526004909501546001600160a01b0316858201529082019390935291015292915050565b508054610580906107a9565b6000825580601f10610590575050565b601f0160209004906000526020600020908101906105ae91906105d5565b50565b905290565b60408051606081018252600080825260208201529081016105b16105ee565b5b808211156105ea57600081556001016105d6565b5090565b60405180604001604052806000151581526020016105b16040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b60006040828403121561064157600080fd5b50919050565b60006020828403121561065957600080fd5b81356001600160a01b038116811461067057600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b600281106105ae57634e487b7160e01b600052602160045260246000fd5b815160a08201906106bb8161068d565b82526020838101511515818401526040808501518051828601529182015160608501528101516001600160a01b031660808401525b5092915050565b82815260006020604081840152835180604085015260005b8181101561072b5785810183015185820160600152820161070f565b8181111561073d576000606083870101525b50601f01601f191692909201606001949350505050565b815160c08201906107648161068d565b82526020838101511515818401526040808501518051151582860152820151805160608601529182015160808501528101516001600160a01b031660a08401526106f0565b600181811c908216806107bd57607f821691505b6020821081141561064157634e487b7160e01b600052602260045260246000fd5b80151581146105ae57600080fd5b6000602082840312156107fe57600080fd5b8151610670816107de565b8135815260408101602083013561081f816107de565b8015156020840152509291505056fea264697066735822122016f53c219cb438fe71c41ae6a7ebe07c7062c80eea52539294c6d2f69bd519f964736f6c634300080c0033`,
  BytecodeLen: 2699,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:11:after expr stmt semicolon',
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
