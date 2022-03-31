"reach 0.1";
// nftId => owner,renter
const RentedNfts = Object({ owner: Address, renter: Address });

const Rent = Object({
  nftId: UInt,
  renter: Address,
  rentAmount: UInt,
});
// payment date => rent
const RentersPayment = Object({ rent: Rent, hasPayed: Bool });

const NewRentedNft = Object({
  nftId: UInt,
  owner: Address,
  renter: Address,
  rentAmount: UInt,
  paymentDates: Array(UInt, 7),
});

const OwnerSchema = {
  // nftId,owner,renter, renting amount, payment dates
  // should return bool if it succeeded
  rentNFT: Fun([NewRentedNft], Bool),
  claimNft: Fun([UInt], Bool),
};

const RenterSchema = {
  // nftId, paymentDate, rentAmount
  // should return bool if it succeeded
  payRent: Fun([Object({ paymentDate: UInt, rent: Rent })], Bool),
};

export const main = Reach.App(() => {
  const Owner = Participant("Owner", {
    ...OwnerSchema,
  });
  const Renter = Participant("Renter", {
    ...RenterSchema,
  });

  init();

  Owner.only(() => {
    const rentedNfts = declassify(interact.rentNFT({}));
  });
  Owner.publish(rentedNfts);
  commit();

  Renter.only(() => {
    const rentersPayment = declassify(interact.getRenterPaymentByDate(0));
  });
  Renter.publish(rentersPayment);
  commit();

  exit();
});
