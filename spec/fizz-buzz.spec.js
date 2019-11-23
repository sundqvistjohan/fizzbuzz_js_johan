require('../spec.helper')

describe ('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it('return a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    })

    it('return Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

    it('return Buzz if number is divisible by 5', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

    it('returns FizzBuzz if number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
    })
})