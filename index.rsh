"reach 0.1";
// nftId => owner,renter
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
  paymentDates: Array(UInt, 12), // maximum rent for 12 month
});

// Someone who has NFT
const UserSchema = {
  getRentedNft: Fun([UInt], NewRentedNft),
};
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
  const User = Participant("User", {
    ...UserSchema,
  });
  const Owner = API("Owner", {
    ...OwnerSchema,
  });
  const Renter = API("Renter", {
    ...RenterSchema,
  });

  init();
  User.only(() => {
    const rentedNft = declassify(interact.getRentedNft(0));
  });
  User.publish(rentedNft);
  const rentedNfts = new Map(UInt);
  const rentersPayment = new Map(UInt);
  commit();
  User.publish();

  const [keepGoing] = parallelReduce([true])
    .define(() => {
      const rentByNftId = (nftId, owner, renter, rentAmount, paymentDates) => {
        rentedNfts[nftId] = {
          owner,
          renter,
          rentAmount,
          paymentDates,
        };
        // transfer ownership
        // nftIdByOwner[nftId] = renter;

        for (let i = 0; i < paymentDates.length; paymentDates.length) {
          rentersPayment[paymentDates[i]] = {
            nftId,
            renter,
            rentAmount,
            hasPayed: false,
          };
        }
      };
    })
    .invariant(true)
    .while(keepGoing)
    .api(
      Owner.rentNFT,
      ({ nftId, owner, renter, rentAmount, paymentDates }) => {
        rentByNftId(nftId, owner, renter, rentAmount, paymentDates);
      }
    );

  exit();
});
