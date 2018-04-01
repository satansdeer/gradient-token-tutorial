import Web3 from "web3";
import contract from "truffle-contract";

import GradientTokenArtifact from "./contracts/GradientToken.json";
import TokenAuctionArtifact from "./contracts/TokenAuction.json";

import addresses from "./addresses.json";

const { tokenAddress, auctionAddress } = addresses;

const getHttpProvider = () => {
  return new Web3.providers.HttpProvider("http://localhost:7545");
};

const getProvider = () => {
  return window.web3 ? window.web3.currentProvider : getHttpProvider();
};

const provider = getHttpProvider();

const GradientToken = contract(GradientTokenArtifact);
GradientToken.setProvider(provider);

const gradientTokenInstance = GradientToken.at(tokenAddress);
