import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = await loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating test account for Creator`);
const [accOwner, accRenterA, accRenterB, accRenterC] = await Promise.all([
  stdlib.newTestAccount(startingBalance),
  stdlib.newTestAccount(startingBalance),
  stdlib.newTestAccount(startingBalance),
  stdlib.newTestAccount(startingBalance),
]);

console.log(`Having creator create testing NFT`);
const [houseA, houseB, houseC] = await Promise.all([
  stdlib.launchToken(accOwner, "houseA", "NFT", {
    supply: 1,
  }),
  stdlib.launchToken(accOwner, "houseB", "NFT", {
    supply: 1,
  }),
  stdlib.launchToken(accOwner, "houseC", "NFT", {
    supply: 1,
  }),
]);
console.log("accOwner", accOwner.getAddress());
console.log("house A is", houseA);

// A fast solution to manage ownership in Reach
// To be modified by adding a token protocol and modify it
const nftIdByOwner = {};
// fill object with NFTs id and the owner
nftIdByOwner[houseA.id.toString()] = accOwner.getAddress();
nftIdByOwner[houseB.id.toString()] = accOwner.getAddress();
nftIdByOwner[houseC.id.toString()] = accOwner.getAddress();

const rentAPrice = stdlib.parseCurrency(2);
const rentBPrice = stdlib.parseCurrency(3);
const rentCPrice = stdlib.parseCurrency(4);

const unixTime = Date.now() * 1000; // in millisecond
const houseAPaymentsDates = [
  unixTime + 1000,
  unixTime + 2000,
  unixTime + 10000,
];
const houseBPaymentsDates = [
  unixTime + 3000,
  unixTime + 4000,
  unixTime + 20000,
];
const houseCPaymentsDates = [unixTime + 5000, unixTime + 6000, unixTime + 9000];

let done = false;

const rentedNfts = {};
const rentersPayment = {};

const renters = new Set();
renters.add(accRenterA);
renters.add(accRenterB);
renters.add(accRenterC);

const ctcOwner = accOwner.contract(backend);
await ctcOwner.participants.Owner({
  rentNFT: (newNft) => {
    const { nftId, owner, renter, rentAmount, paymentDates } = newNft;
    if (nftIdByOwner[nftId] !== owner) {
      console.error(`Owner ${owner} is not the owner of NFT ${nftId}`);
    }

    rentedNfts[nftId] = {
      owner,
      renter,
      rentAmount,
      paymentDates,
    };
    // transfer ownership
    nftIdByOwner[nftId] = renter;

    for (let i = 0; i < paymentDates.length; paymentDates.length) {
      rentersPayment[paymentDates[i]] = {
        nftId,
        renter,
        rentAmount,
        hasPayed: false,
      };
    }
    return true;
  },
  claimNft: (nftId) => {
    // msg.sender in Reach?
    const todayInMillisecond = Date.now().getTime() * 1000;
    for (let i = 0; i < rentedNfts[nftId].paymentDates.length; i++) {
      if (todayInMillisecond > rentedNfts[nftId].paymentDates[i]) {
        if (rentersPayments[rentedNfts[nftId].paymentDates[i]].hasPayed)
          // Pay renting Amount:  rentersPayments[rentedNfts[nftId].paymentDates[i]].rentAmount
          // return true to pay the rent on the .rsh
          return true;
      } else {
        nftIdByOwner[nftId] = rentedNfts[nftId].owner;
        return false;
      }
    }
  },
});

const ctcRenter = accRenter.attach(backend, ctcOwner.getInfo());
await ctcRenter.participants.Renter({
  payRent: (rent) => {
    const { paymentDate, nftId, renter, rentAmount } = rent;
    rentersPayment[paymentDate] = {
      nftId,
      renter,
      rentAmount,
      hasPayed: true,
    };
    return true;
  },
});
