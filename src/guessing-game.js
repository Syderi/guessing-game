class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round(((this.max - this.min) / 2) + this.min);
        // console.log('this.result', this.result);
        return this.result;
    }

    lower() {

        this.max = this.result;
        // return this.max
    }

    greater() {
        this.min = this.result;
        // return this.min;
    }
}

module.exports = GuessingGame;
