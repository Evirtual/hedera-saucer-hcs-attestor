import "@nomicfoundation/hardhat-toolbox";

export default {
  solidity: "0.8.28",
  networks: {
    hederaTestnet: {
      url: "https://testnet.hashio.io/api",
      accounts: process.env.HEDERA_EVM_PRIVATE_KEY ? [process.env.HEDERA_EVM_PRIVATE_KEY] : []
    }
  }
};
