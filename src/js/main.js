document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('button')
    let displayDiv = document.getElementById('display_answer')
    button.addEventListener('click', () => {
        let value = document.getElementById('value').value
        let fizzBuzz = new FizzBuzz
        let result = fizzBuzz.check(value)
        displayDiv.innerHTML = result;
    })
})