const Web3 = require("web3");
const contract = require("truffle-contract");
const GradientTokenArtifact = require("./src/contracts/GradientToken.json");
const TokenAuctionArtifact = require("./src/contracts/TokenAuction.json");
const addresses = require("./src/addresses.json");

const { tokenAddress, auctionAddress } = addresses;

const getHttpProvider = () => {
  return new Web3.providers.HttpProvider("http://localhost:7545");
};

const getProvider = () => {
  return window.web3 ? window.web3.currentProvider : getHttpProvider();
};

async function run() {
  const provider = getHttpProvider();

  const GradientToken = contract(GradientTokenArtifact);
  GradientToken.setProvider(provider);

  const gradientTokenInstance = await GradientToken.at(tokenAddress);
  const owner = await gradientTokenInstance.owner();
  console.log(owner);
  await gradientTokenInstance.mint("#ff00dd", "#ddddff", {
    from: owner,
    gas: 170000
  });
  await gradientTokenInstance.mint("#00dffd", "#dffdff", {
    from: owner,
    gas: 170000
  });
  const tokens = await gradientTokenInstance.tokensOf(owner);
  const gradients = await gradientTokenInstance.getGradient(tokens[0]);
  console.log(tokens);
  console.log(gradients);
}

run().catch(console.error);
