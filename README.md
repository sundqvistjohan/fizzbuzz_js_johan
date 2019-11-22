## Fizz Buzz in JavaScript

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

## Question 4.
Why are we moving ```(number % 5 === 0)```to the top of the if statement?

**Answer**

Unless I'm not thinking straight it is not necessary to get the correct output, so the only thing I can think of is that it will look neater when we add the "divisible by 15" test which needs to go at the top. So the order will be ```% 15, % 5, %3``` instead of ```% 15, %3, % 5```.
