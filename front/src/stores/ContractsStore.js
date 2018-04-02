import { observable, computed, action, autorun, decorate } from "mobx";
import contract from "truffle-contract";

import GradientTokenArtifact from "../contracts/GradientToken.json";
import TokenAuctionArtifact from "../contracts/TokenAuction.json";
import addresses from "../addresses.json";
import getProvider from "utils/getProvider";

class ContractsStore {
  gradientTokenInstance = null;

  async setup() {
    const { tokenAddress, auctionAddress } = addresses;

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
