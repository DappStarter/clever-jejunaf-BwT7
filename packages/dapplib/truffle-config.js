require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet release noble exchange hover arctic metal gate'; 
let testAccounts = [
"0xcc19037ba6950c01751bfff59381edf1c76b67a6b80490b42175667cbdc1b2c7",
"0x40cb45aa7f75b4d640429bab378096b1471941a2c4dc6fbb1578eb1cb9fd71a4",
"0x2a01d0639b012a9f4ede6e203c94443a2a1ea9a663ad9dfffa0d1e036a715e60",
"0x93dbcae0ede38443430d0d304407b60998c8144d48cb07ecc6168a584a019e6d",
"0x4752b169c1d65bab325a3dbda2c8627cc7edff04ee26b415f380d66ef87017c9",
"0x577ef6916708f87cf6543a7e78bf56756fb525f0ec599f2de1787f0bc4be9d4b",
"0xd543e3ba75d1fa9948758b2f5385836fea4dca0d414ad9b44f5fff2246788b78",
"0x5c0dc75bcc64c5f401804f67b11ff14d519eb4ff0df73408fbfce00fd444059c",
"0x9c0c06c7ef1ef0087e279fa56df145c8c7922e2b682e2e285621e218f42bd31b",
"0x1e471780d942dbfa35314c103f49b100f5794ddafea3b713239f8c9087c234d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


