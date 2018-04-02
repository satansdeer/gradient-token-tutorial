import { observable, decorate } from "mobx";
import contract from "truffle-contract";

import GradientTokenArtifact from "../contracts/GradientToken.json";

import addresses from "../addresses.json";
import getProvider from "utils/getProvider";

class ContractsStore {
  gradientTokenInstance = null;

  async setup() {
    const { tokenAddress } = addresses;

    const provider = getProvider();

    const GradientToken = contract(GradientTokenArtifact);
    GradientToken.setProvider(provider);
    const gradientTokenInstance = await GradientToken.at(tokenAddress);
    this.setGradientTokenInstance(gradientTokenInstance);
  }

  setGradientTokenInstance(gradientTokenInstance) {
    this.gradientTokenInstance = gradientTokenInstance;
  }
}

export default decorate(ContractsStore, {
  gradientTokenInstance: observable
});
