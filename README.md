# Weekend Challenge 1: Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

### Files Provided
No files have been provided. Fork and clone this repository or create a new GitHub repository to get started. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Hard Mode
Create a delete button that removes an employee from the DOM. For Hard mode, it does not need to remove that Employee's salary from the reported total.

Add styling to the page.

Create an `Employee` class to store the information about each new employee in an Array.

## Stretch Mode

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. Look into jQuery's .data() function. You will need to do something both when the employee is added and when they are deleted.

Add styling or extra functionality that fits with the theme of this assignment. 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Hard | optional
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at [http://primeacademy.io](http://primeacademy.io), as usual and don't hesitate to hit up the Slack channel as needed!
