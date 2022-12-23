const { ethers } = require("ethers");

const rpcURL = "https://cloudflare-eth.com";
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const ERC20_ABI = [
	"function name() view returns(string)",
	"function symbol() view returns(string)",
	"function totalSupply() view returns(uint256)",
	"function balanceOf(address) view returns(uint)",
];

// DAI Stablecoin contract address
const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const DAIContract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
	const name = await DAIContract.name();
	const symbol = await DAIContract.symbol();
	const totalSupply = await DAIContract.totalSupply();
	console.log(name, symbol, ethers.utils.formatEther(totalSupply));

	// get the balance of the top DAI stablecoin holders
	const balance = await DAIContract.balanceOf("0x6B175474E89094C44Da98b954EedeAC495271d0F");
	console.log(ethers.utils.formatEther(balance));
};

main();
