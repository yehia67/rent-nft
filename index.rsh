"reach 0.1";
// nftId => owner,renter
const RentedNfts = Tuple(UInt, Object({ owner: Address, renter: Address }));

const Rent = Object({
  nftId: UInt,
  renter: Address,
  rentAmount: UInt,
});
// payment date => rent
const RentersPayment = Tuple(UInt, Object({ rent: Rent, hasPayed: Bool }));

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
  getRentedNfts: Fun([], RentedNfts),
};

const RenterSchema = {
  // nftId, paymentDate, rentAmount
  // should return bool if it succeeded
  payRent: Fun([Object({ paymentDate: UInt, rent: Rent })], Bool),
  getRentersPayments: Fun([], RentersPayment),
};

const ManageRentingSchema = {
  // keep track of payment and return ownership if renter didn't pay after deadline
  // removed renters
  checkPayments: Fun([], Null), // should return array of address
};

export const main = Reach.App(() => {
  const Owner = Participant("Owner", {
    ...OwnerSchema,
  });
  const Renter = Participant("Renter", {
    ...RenterSchema,
  });
  const ManageRenting = API("ManageRenting", {
    ...ManageRentingSchema,
  });
  init();

  Owner.only(() => {
    const rentedNfts = declassify(interact.getRentedNfts());
  });
  Owner.publish(rentedNfts);
  commit();

  Renter.only(() => {
    const rentersPayment = declassify(interact.getRentersPayments());
  });
  Renter.publish(rentersPayment);
  commit();

  exit();
});
