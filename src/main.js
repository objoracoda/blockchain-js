const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('8365675d1d058a86a88ccef5bafccf7487dabe9b184534ac2d72af2d12ac2d38');
const myWalletAddress = myKey.getPublic('hex');


let someCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key',10);
tx1.signTransaction(myKey);
someCoin.addTransaction(tx1);


console.log("\n Starting the miner...");
someCoin.minePendingTransactions(myWalletAddress);

console.log("\n Balance of objoracoda is ", someCoin.getBalanceOfAddress(myWalletAddress));

