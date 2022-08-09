const { getNamedAccounts } = require("hardhat")
const { etherscan } = require("../hardhat.config")
const { getWeth } = require("./getWeth")

async function main() {
    // the protocol treats everything as an ERC20 token
    await getWeth()
    const { deployer } = await getNamedAccounts()
    // abi, address

    // Lending Pool Address Provider : 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
    // Lending Pool : ^
}

async function getLendingPool(account) {
    const lendingPoolAddressesProvider = await etherscan.getContractAt(
        "ILendingPoolAddressesProvider",
        "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
        account
    )
    const lendingPoolAddress = await lendingPoolAddressesProvider.getLendingPool()
    const lendingPool = await etherscan.getContractAt("")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
