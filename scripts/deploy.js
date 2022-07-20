async function main() {
    const [deployer] = await ethers.getSigners(); //get the account to deploy the contract
    console.log("Deploying contracts with the account:", deployer.address); 

    const Temp = await ethers.getContractFactory("Temp"); // Getting the Contract
    let temp = await Temp.deploy(); //deploying the contract

    await temp.deployed(); // waiting for the contract to be deployed
    console.log("Contract deployed to:", temp.address); // Returning the contract address

}
  
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});