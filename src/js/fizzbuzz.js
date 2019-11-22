function FizzBuzz() {
    this.check = (number) => {
        return number;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}