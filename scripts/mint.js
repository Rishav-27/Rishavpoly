//mint.js
const hre = require("hardhat");
require('dotenv').config()


async function main() {



    // Get private key from env
  const privateKey = "c3723359793864407c6ee0007cc5c09cfb279f0470de40c68516c64691bac1df";

  // The URL of the network provider
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract to  be added every time after deploying
  const contractAddress = "0x07318C63030F43984aca376C24Ce853fe34b7fA1";

  // Get the contract factory and attach it to the signer
  const MetaToken = await ethers.getContractFactory("MetaToken", signer);
  const contract = await MetaToken.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("minted your 5 tokens successfully");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });