const NumSum = require("../src/NumSum").default

describe("NumSum works correctly", () => {
    it("addNumbers should add numbers correctly", () => {
        const numSum = new NumSum(2, 7)
        expect(numSum.addNumbers()).toEqual(9)
    })
})
  