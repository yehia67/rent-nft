# Rent NFT

Help NFT owners to rent their digital asset to earn some passive income.

## How It Works?

We have only two actors, the NFT owner, and the renter. The owner should set the renter and transfer the token ownership. The renter should pay the rent at a specific interval, and he can pay in advance. The Nft owner could claim rent any time after the deadline. If the renter pay, he will receive his tokens; otherwise, he will return the NFT.

- NFT owner submit `rentNFT` transaction with the following data:

  1. NFT id
  2. Renter address
  3. Rent amount
  4. payments dates in timestamp ex:[1647691061,1647691261,1647699061]

What will happen then?

1. Check if the caller is the owner of the NFT.
2. Store renting info:
   ```
   rentedNfts[nftId] = {
      owner,
      renter,
      rentAmount,
      paymentDates,
    };
   ```
3. Transfer ownership (Override approve methods so only the smart contract can transfer ownership or set other approval).
4. Set payments period
   ```
   for(let i = 0; i < paymentDates.length;paymentDates.length){
   rentersPayment[paymentDates[i]] = {
      nftId,
      renter,
      rentAmount,
      hasPayed: false,
    };
   }
   ```

- Renter submit `payRent` transaction with the following data:
  1. Payment date
  2. NFT Id
  3. Rent Amount

What will happen then?

1.  isRenter: `renter === rentedNfts[nftId].renter`
2.  Pay `rentAmount` to the smart contract.
3.  Set renter payment status:
    ```
    rentersPayment[paymentDate] = {
      nftId,
      renter,
      rentAmount,
      hasPayed: true,
    };
    ```

- NFT owner submit `claimRent` with `nftId`
  What will happen then?
  1.  isOwner: `caller === rentedNfts[nftId].owner`
  2.  Get payments date `rentedNfts[nftId].paymentDates`
  3.  Claim or transfer ownership:

```
const todayInMillisecond = Date.now().getTime()*1000;
for(let i = 0; i < rentedNfts[nftId].paymentDates.length;i++){

    if(todayInMillisecond > rentedNfts[nftId].paymentDates[i]){
        if(rentersPayments[rentedNfts[nftId].paymentDates[i]].hasPayed)
            pay(rentersPayments[rentedNfts[nftId].paymentDates[i]].rentAmount)
    }else{
        transferOwnership(rentedNfts[nftId].owner)
    }
}
```

## Run

Choose connection type to assume you will use Algo Devnet.

```
export REACH_CONNECTOR_MODE=ALGO-devnet
```

Compile

```
./reach compile
```

Run

```
./reach run
```
