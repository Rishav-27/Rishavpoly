require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ['7d46c2c48c0617c6043f89e5672451b24de37e4540dd5dde21a5ea12b7edca77'],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: ['c3723359793864407c6ee0007cc5c09cfb279f0470de40c68516c64691bac1df'],
    },
  }
};
