async function main(contractAddress, args) {
    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

const contractAddress = "0x724aBC4F89686244814f3A4af549F691A4fC9FEe";
const args = [];
main(contractAddress, args)
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
