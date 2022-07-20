const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("Temp contract", function () {
    
    let Temp, temp;
    let deployer, alice, bob;

    before(async () => {
        Temp = await ethers.getContractFactory("Temp");
        temp = await Temp.deploy();
        [deployer, alice, bob] = await ethers.getSigners();
    });

    it("should deploy correctly", async () => {
        assert.isOk(temp, "Deployment failed");
    });

    it("", async () => {

        // expect(/*a*/).to.equal(/*b*/);

        // await expect(/*call*/)
        // .to.emit(/*contract name, event name*/)
        // .withArgs(/*arguments*/);

        // await expect(/*call*/).to.be.revertedWith(/*error*/);

    });

});