import { observable, computed, action, autorun, decorate, when } from "mobx";

class GradientTokenStore {
  tokens = [];
  owner = null;

  constructor(contractsStore, web3Store) {
    this.contractsStore = contractsStore;
    this.web3Store = web3Store;
    when(
      () =>
        this.contractsStore.gradientTokenInstance &&
        this.web3Store.currentAccount,
      async () => {
        const { gradientTokenInstance } = this.contractsStore;
        const owner = await gradientTokenInstance.owner();
        this.setOwner(owner);
        this.fetchTokens();
      }
    );
  }

  fetchTokens = async () => {
    const { gradientTokenInstance } = this.contractsStore;
    const { currentAccount } = this.web3Store;
    console.log(currentAccount);
    console.log(this.owner);
    const tokens = await gradientTokenInstance.tokensOf(currentAccount);
    const gradients = await Promise.all(
      tokens.map(async token => {
        return gradientTokenInstance.getGradient(token);
      })
    );
    this.setTokens(gradients);
  };

  randomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }

  mintToken = async () => {
    const { gradientTokenInstance } = this.contractsStore;
    const gradient = [this.randomColor(), this.randomColor()];
    await gradientTokenInstance.mint(gradient[0], gradient[1], {
      from: this.owner,
      gas: 170000
    });
    this.appendToken(gradient);
  };

  setTokens(tokens) {
    this.tokens = tokens;
  }

  appendToken(token) {
    this.tokens.push(token);
  }

  setOwner(owner) {
    this.owner = owner;
  }

  get isOwner() {
    const { currentAccount } = this.web3Store;
    if (!currentAccount || !this.owner) {
      return;
    }
    return this.owner === currentAccount;
  }
}

export default decorate(GradientTokenStore, {
  owner: observable,
  tokens: observable,
  setOwner: action,
  setTokens: action,
  appendToken: action,
  isOwner: computed
});
