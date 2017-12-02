// Sorry not sorry
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var supersafepass = "";
var buyerAccountIndex = 0;
var sellerAccountIndex = 1;

function setDefaultAccount(index) {
	web3.eth.defaultAccount = web3.eth.accounts[index]
	web3.personal.unlockAccount(web3.eth.defaultAccount, supersafepass);
}
setDefaultAccount(0);

abiArray = [{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"releaseFunds","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"},{"name":"price","type":"uint256"}],"name":"newCase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"}],"name":"caseStorage","outputs":[{"name":"seller","type":"address"},{"name":"buyer","type":"address"},{"name":"totalPrice","type":"uint256"},{"name":"isPaid","type":"bool"},{"name":"isReleased","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint8"}],"name":"pay","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

var contractAddress = "0xb4B87c1bAe7A4b32086d87E67499698A5006C1d8";

var contract = web3.eth.contract(abiArray).at(contractAddress);

function payForCaseId(id, valueInEther) {
	setDefaultAccount(buyerAccountIndex);
	contract.pay(id, {value: web3.toWei(valueInEther, 'ether')});
}

function newCase(id, totalValueInEther) {
	setDefaultAccount(sellerAccountIndex);
	contract.newCase(id, totalValueInEther);
}

function authorizeCaseId(id) {
	setDefaultAccount(buyerAccountIndex);
	contract.releaseFunds(id)
}

