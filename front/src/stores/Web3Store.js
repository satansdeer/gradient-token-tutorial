import { observable, computed, action, autorun, decorate } from "mobx";
import Web3 from "web3";

class Web3Store {
  web3 = null;

  constructor(provider) {
    this.web3 = new Web3(provider);
    setInterval(this.updateCurrentAccount, 100);
  }

  updateCurrentAccount = async () => {
    this.setCurrentAccount(await this.getAccount(this.web3));
  };

  async getAccount(web3) {
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts(function(error, accounts) {
        if (error) {
          return reject();
        }
        resolve(accounts[0]);
      });
    });
  }

  setCurrentAccount(account) {
    this.currentAccount = account;
  }
}

export default decorate(Web3Store, {
  currentAccount: observable,
  setCurrentAccount: action
});
