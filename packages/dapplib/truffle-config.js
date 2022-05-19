require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift reward stereo proud harvest nasty fortune soon'; 
let testAccounts = [
"0xceed1a9d513fbf056e22c8bc64f561fe6eaba51903657bee77c7ae583771bc01",
"0x8875fbb6336bbceedabf3da32205a3f9b7774a4afac0450bc8fede6a79a4d8f0",
"0x1e99809b0eecd3aab5f07dbd4cc4006d8248c84c7449b1ce8905f29cbff4f7b6",
"0x02069207ff96b33bf89e9dd698aa9c08545b21a47bd80f03907a8e39900d0962",
"0xc9686ecd42db67b1ece959bee9e75c963784d1ed248ac1fe0198b47f7781c47f",
"0x5aba2c1b9c682eadc55bfe93c6962ccc345b8f609a0c90715c8e7af3424df85a",
"0x869cacc74f3ecce1a66cc8809a842b941dd40774719712387cc90497b8d04863",
"0x04618083c3432a92e6d646734bba0cef8adf6f2f1c750d4e57458708cc3242e1",
"0xc25f962879899d1c67c82d162a05aac2707fdde14f05700e0de98f56ccb74381",
"0x402445d77e35b7562e78a7b66914bf25c4ad25632fdad42d2b70c59e61087a53"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

