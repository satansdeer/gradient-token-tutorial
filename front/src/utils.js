import Web3 from "web3";

const getHttpProvider = () => {
  return new Web3.providers.HttpProvider("http://localhost:7545");
};

export const getProvider = () => {
  return window.web3 ? window.web3.currentProvider : getHttpProvider();
};
