const path = require('path')
const HDWalletProvider = require("@truffle/hdwallet-provider")
const project_id = process.env["PROJECT_ID"]

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "vapp/src/contracts"),
  networks: {
    ropsten: {
      provider: function() {        
        return new HDWalletProvider(process.env["MNEMONIC"], `https://ropsten.infura.io/v3/${project_id}`);
      },
      network_id: '3',
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env["MNEMONIC"], `https://rinkeby.infura.io/v3/${project_id}`);
      },
      network_id: '4',
    },
    test: {
      provider: function() {
        return new HDWalletProvider(process.env["MNEMONIC"], "http://127.0.0.1:8545/");
      },
      network_id: '*',
    },
  }
};
