const StitCoin = artifacts.require("../contracts/StitCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(StitCoin);
};

