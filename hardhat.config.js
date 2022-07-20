// hardhat.config.js
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const infuraProjectId = process.env.INFURA_PROJECT_ID;
const mnemonic = process.env.MNEMONIC;
const alchemyAPIKey = process.env.ALCHEMY_API_KEY;
const etherscanAPIKey = process.env.ETHERSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: { 
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraProjectId}`,
      accounts: {mnemonic: mnemonic}
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyAPIKey}`,
      accounts: {mnemonic: mnemonic}
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      accounts: {mnemonic: mnemonic}
    },
    hardhat: {
    }
  },
  etherscan: {
    apiKey: etherscanAPIKey,
  },
};