const Migrations = artifacts.require("./Contract.sol")

module.exports = function(deployer) {
  deployer.deploy(Contract)
}
