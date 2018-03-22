import assertRevert from "zeppelin-solidity/test/helpers/assertRevert";
import util from "./util";

const GradientToken = artifacts.require("GradientToken");
const TokenAuction = artifacts.require("TokenAuction");

contract("Auction", accounts => {
  let nft, auctionContract, tokens;

  before(async () => {
    nft = await GradientToken.new();
    auctionContract = await TokenAuction.new(nft.address);
  });

  it("Should accept nft on creation", async () => {
    const nftAddr = await auctionContract.nonFungibleContract();
    assert.equal(nftAddr, nft.address);
  });

  describe("Instance methods", () => {
    let tokens;

    before(async () => {
      nft = await GradientToken.new();
      auctionContract = await TokenAuction.new(nft.address);

      await nft.mint("#ff00dd", "#ddddff");
      tokens = await nft.tokensOf(accounts[0]);
      await nft.approve(auctionContract.address, tokens[0]);
    });

    describe("createAuction", () => {
      before(async () => {
        await auctionContract.createAuction(tokens[0], 100);
      });

      after(async () => {
        await auctionContract.cancel(tokens[0]);
      });

      it("Should take ownership of a token", async () => {
        const tokenOwner = await nft.ownerOf(tokens[0]);
        assert.equal(tokenOwner, auctionContract.address);
      });

      it("Should create new auction", async () => {
        const auction = await auctionContract.tokenIdToAuction(tokens[0]);
        assert.equal(auction[0], accounts[0]);
        assert.equal(auction[1].toNumber(), 100);
      });
    });

    describe("bid", () => {
      let initialBal0;

      before(async () => {
        await auctionContract.createAuction(tokens[0], 10);

        initialBal0 = await util.getBalance(accounts[0]);
        await auctionContract.bid(tokens[0], { from: accounts[1], value: 10 });
      });
      it("Should remove auction", async () => {
        const auction = await auctionContract.tokenIdToAuction(tokens[0]);
        assert.equal(auction[0], "0x0000000000000000000000000000000000000000");
      });

      it("Should transfer money to seller", async () => {
        const balance0 = await util.getBalance(accounts[0]);
        assert(balance0.sub(initialBal0).eq(10));
      });

      it("Should transfer token to buyer", async () => {
        assert.equal(await nft.ownerOf(tokens[0]), accounts[1]);
      });
    });

    describe("cancel", () => {
      before(async () => {
        await auctionContract.createAuction(tokens[0], 10);
        await auctionContract.cancel(tokens[0]);
      });

      it("Should remove auction", async () => {
        const auction = await auctionContract.tokenIdToAuction(tokens[0]);
        assert.equal(auction[0], "0x0000000000000000000000000000000000000000");
      });

      it("Should transfer token back to seller", async () => {
        assert.equal(await nft.ownerOf(tokens[0]), accounts[0]);
      });
    });
  });
});
