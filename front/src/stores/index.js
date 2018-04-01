import ContractsStore from "./ContractsStore";
import GradientTokenStore from "./GradientTokenStore";
import Web3Store from "./Web3Store";
import ModalStore from "./ModalStore";
import Web3 from "web3";

const getProvider = () => {
  return window.web3
    ? window.web3.currentProvider
    : new Web3.providers.HttpProvider("http://localhost:7545");
};

const modalStore = new ModalStore();
const web3Store = new Web3Store(getProvider());
const contractsStore = new ContractsStore();
const gradientTokenStore = new GradientTokenStore(contractsStore, web3Store);

export default {
  modalStore,
  web3Store,
  contractsStore,
  gradientTokenStore
};
