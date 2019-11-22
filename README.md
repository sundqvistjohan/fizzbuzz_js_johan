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
