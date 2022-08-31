export default class NumSum {
    x: number
    y: number

    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    addNumbers() {
        return this.x + this.y
    }
}

const numSum = new NumSum(2, 5)
const sum = numSum.addNumbers()