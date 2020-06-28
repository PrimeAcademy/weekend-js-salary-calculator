$(document).ready(init);

const employeeArray = [];

function init() {
  console.log('Initialized');
  $('#js-form-employee-fields').on('submit', addEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  console.log('in addEmployee');

  const employeeObject = {
    first: $('#js-firstNField').val(),
    last: $('#js-lastNField').val(),
    id: $('#js-IdField').val(),
    title: $('#js-titleField').val(),
    salary: $('#js-annualSalaryField').val(),
  };

  employeeArray.push(employeeObject);
}

// Create an application that records employee salaries
// and adds salaries up to report monthly costs.

// Topics Covered
// JavaScript
// jQuery - Selectors, append, and event handling

// The application should have an input form that collects:
// employee
// first name,
// last name,
// ID number,
// job title,
// annual salary.

// A 'Submit' button should collect the form information,

// store the information to calculate monthly costs,

// append information to the DOM and
// clear the input fields.
// Using the stored information, calculate monthly costs
//  and append this to the to DOM.

//  If the total monthly cost exceeds $20,000,
//      add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM.

// ## Stretch Mode

// Add styling or extra functionality that fits with the theme
// of this assignment.

// Once the employee is deleted, update the total spend on salaries
// account for this employee's removal. This will require that the
// logic knows which element was removed.

// You will need to use `.text()` as a getter or look into
// jQuery's `.data()` function. This is tricky!
