var Migrations = artifacts.require("./ZombieFactory.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};