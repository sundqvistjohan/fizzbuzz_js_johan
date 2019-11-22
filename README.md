# Fizz Buzz in JavaScript

## Question 1.
What does the following lines of code do?
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```
**Answer**

```global.browser = new BrowserHelpers()```creates a new global object of the BrowserHelpers class. The syntax global.variable is a part of nodeJS (server-side javascript).
```global.expect = chai.expect``` similarly creates a global variable referencing the chai.expect object.
We want these to be global so that we can use them in our spec files, saving us some repetitive code writing.

------

## Question 2.
Why are we placing the following code outside our ``ìt``` block in the specs?
```
let fizzBuzz = new FizzBuzz
```
**Answer**

We will create the object once and then use it for all our tests, instead of recreating it for every test.

------

## Question 3.
What is the difference between using ```==``` and ```===``` in JavaScript?

**Answer**

Evaluating using ```===```is more strict and compares both the object type and value. If the object types are different the evaluation returns false if the values of both objects appear the same.
```==```is less strict and converts both objects to a common type before doing the evaluation.
In the example below the strict comparison return false when comparing the number ```1``` to the string ```'1'``` while the less strict comparsion returns true.
````
const number = 1;
const numberString = '1';
console.log(number === numberString) // false
console.log(number == numberString) // true
````
Source: [MDN Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

----

## Question 4.
Why are we moving ```(number % 5 === 0)```to the top of the if statement?

**Answer**

Unless I'm not thinking straight it is not necessary to get the correct output, so the only thing I can think of is that it will look neater when we add the "divisible by 15" test which needs to go at the top. So the order will be ```% 15, % 5, %3``` instead of ```% 15, %3, % 5```.

----

## Question 5.
What is the difference between feature and unit tests?

**Answer**

Unit tests test the code by checking if every small unit of code returns the expected output.
Feature tests test the interface of the application, the way a user should or could interact with the application.

----

## Question 6.
What does the following code do?
```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
**Answer**

The ```describe``` block defines our testing scenario.

The ```before``` block runs once before the actual tests run, it creates a browser sessions and navigates to ```http://localhost:8080/```

The ```beforeEach``` block is run beforce each test, it reloads the page, like clicking Refresh in the browser.

The ```after```block runs after all tests are finished, it closes the browser.

----

## Question 7.
What are expectations in the context of testing?

**Answer**

Expectations are what result we are expecting. We check if the result we get is the result we expect to get given our input.

----

## Question 8. 
What is happening in the code below?

```
<script src="js/fizzbuzz.js"></script>
```

We include the script file /js/fizzbuzz.js. Instead of writing the script inside <script></script> tags in the HTML file we can write the script in a separate file and include that file.

```
<script>
```
Starts our script block, everything from here until the script end-tag is interpreted as JavaScript.
```
        document.addEventListener('DOMContentLoaded', () => {
```
"Listen" for our document to fully load, when loaded run the code inside the block
```
            let button = document.getElementById('button')
```
Define ```button``` as the HTML element with id="button".
```
            let displayDiv = document.getElementById('display_answer')
```
Define ```displayDiv``` as the HTML element with id="button".
```
            button.addEventListener('click', () =>{
```
Listen for the event "click" on the HTML element previously defined as ```button```, when that event happens, run the code inside the block
```
                let value = document.getElementById('value').value
````
Set ```value``` as the value in the HTML element with id="value".
```
                let fizzBuzz = new FizzBuzz
```
Create a new object ```fizzBuzz``` of the class ```FizzBuzz```
```
                let result = fizzBuzz.check(value)
````
Set ```result``` to the output of the function ```check``` for ```fizzBuzz```.
```
                displayDiv.innerHTML = result;
````
To the previously defined ```displayDiv```element write, as html, the value of ```result```.
```
            })
        })
    </script>
```
Ends, from top to bottom, the 'click' eventListener code block, the 'DOMContentLoaded' eventListener code block and finally the script block.
