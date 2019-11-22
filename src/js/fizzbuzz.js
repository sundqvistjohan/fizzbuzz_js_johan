function FizzBuzz() {
    this.check = (number) => {
        if (number % 3 === 0) {
            return 'Fizz'
        } else {
            return number
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}