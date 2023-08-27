//deploy.js
const hre = require("hardhat");
const fs = require("fs");

async function main() {

  const token = await hre.ethers.deployContract("MetaToken");

  console.log("Token address:", await token.getAddress());

  fs.writeFileSync("metadata/contractAddress.js",`export const nftAddress= "${token.getAddress()}`);

  
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
