const GradientToken = artifacts.require("GradientToken");
const TokenAuction = artifacts.require("TokenAuction");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function(deployer) {
  const gradientToken = await deployer.deploy(GradientToken);
  const auctionContract = await deployer.deploy(
    TokenAuction,
    GradientToken.address
  );
  const addresses = {
    tokenAddress: GradientToken.address,
    auctionAddress: TokenAuction.address
  };

  //console.log("Add these lines to your .env file:");
  //console.log(`REACT_APP_TOKEN_ADDRESS=${GradientToken.address}`);
  //console.log(`REACT_APP_AUCTION_ADDRESS=${TokenAuction.address}`);

  await writeFile(
    path.join(__dirname, "..", "front", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};
