# Weekend Challenge: JavaScript Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
JavaScript Dom Manipulation knowledge (Examples)
  - Accessing the DOM
    - `.document.<SOME_SELECTOR>`
    - Selectors
      - `.querySelector()`
      - `.getElementById()`
      - `.getElementsByClassName()`
      - etc.
  - Dom Manipulation Methods
    - `.addEventListener()`
    - `.prepend()`
    - `.createElement()`
    - `.remove()`
    - etc.
  - Manipulation of DOM elements w/props
    - `.value = 'someValue'`
    - `.innerHTML += (<html>) `
    - `.textContent = 'someValue'`
    - etc.

👉🏽 Use the official documentation for manipulating the DOM with JavaScript as a resource: [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-javascript-salary-calculator" and clone down from there. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.textContent` as a getter, or look into JavaScript's `.dataset` function. This is tricky! 

👉🏽 Use the official documentation for manipulating the DOM with JavaScript as a resource: [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at [http://primeacademy.io](http://primeacademy.io), as usual and don't hesitate to hit up the Slack channel as needed!
