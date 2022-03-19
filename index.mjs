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

const rentA = stdlib.parseCurrency(2);
const rentB = stdlib.parseCurrency(3);
const rentC = stdlib.parseCurrency(4);

const unixTime = stdlib.unixTime();
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
    rentedNfts[nftId] = {
      owner,
      renter,
      rentAmount,
      paymentDates,
    };
    return true;
  },
});

const ctcRenter = accRenter.contract(backend);
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
