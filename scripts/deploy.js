const hre = require("hardhat");

async function main() {
  const factoryAssembly = await hre.ethers.getContractFactory('FactoryAssembly');
  const factoryInstance = await factoryAssembly.deploy({ maxPriorityFeePerGas: 200000 });
  const x = await factoryInstance.deployed();
  const bytecode = await x.getBytecode();
  const salt = hre.ethers.utils.formatBytes32String("test");
  console.log("bytecode = ", bytecode);

  const address = await x.getAddress(bytecode, salt);
  console.log("expected address = ", address);
  const actualAddress = await x.deploy(bytecode, salt);
  console.log("actual address = ", actualAddress);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
