const { getNamedAccounts, network, ethers } = require("hardhat")

const { networkConfig } = require("../helper-hardhat-config")

const AMOUNT = ethers.utils.parseEther("0.1")

async function getWeth() {
    const { deployer } = await getNamedAccounts()
    // call the "deposit" function on the weth contract :
    // need : abi, contract address
    const iWeth = await etherscan.getContractAt(
        "IWeth",
        networkConfig[network.config.chainId].wethToken,
        deployer
    )
    const txResponse = await iWeth.deposit({ value: AMOUNT })
    await txResponse.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth, AMOUNT }
