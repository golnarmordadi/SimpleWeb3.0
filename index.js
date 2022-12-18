const Web3 = require('web3');

const web3 = new Web3('http://127.0.0.1:8545');


/** This will give you list of accounts that we got with using gancha-cli */
web3.eth.getAccounts().
then(console.log);

/** This will give the block number */
web3.eth.getBlockNumber().
then(console.log);

