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
