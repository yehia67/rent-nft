import React from "react";

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.PayRent = class extends React.Component {
  render() {
    const { parent, nftId } = this.props;
    return (
      <div>
        <button onClick={() => parent.payRent(nftId)}>Pay Rent</button>
      </div>
    );
  }
};

exports.RentNft = class extends React.Component {
  render() {
    const { parent, rentedNft } = this.props;
    return (
      <div>
        <button onClick={() => parent.rentNft(rentedNft)}>Rent NFT</button>
      </div>
    );
  }
};

exports.claimRent = class extends React.Component {
  render() {
    const { parent, rentedNft } = this.props;
    return (
      <div>
        <button onClick={() => parent.claimRent(rentedNft)}>Claim Rent</button>
      </div>
    );
  }
};

exports.WaitingForResults = class extends React.Component {
  render() {
    return <div>Waiting for results...</div>;
  }
};

exports.Success = class extends React.Component {
  render() {
    return <div>Transaction submitted successfully!</div>;
  }
};

exports.Fail = class extends React.Component {
  render() {
    return <div>Transaction failed</div>;
  }
};

exports.Timeout = class extends React.Component {
  render() {
    return <div>There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;
