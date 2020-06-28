$(document).ready(init);

const employeeArray = [];

function init() {
  console.log('Initialized');
  $('#js-form-employee-fields').on('submit', addEmployee);
  $('#js-form-employee-fields').on('submit', renderTable);
  $('#js-table-body').on('click', '#js-delete-btn', deleteEmployee);
}

function addEmployee(event) {
  event.preventDefault();
  console.log('in addEmployee');

  const employeeObject = {
    first: $('#js-firstNField').val(),
    last: $('#js-lastNField').val(),
    id: $('#js-IdField').val(),
    title: $('#js-titleField').val(),
    salary: parseInt($('#js-annualSalaryField').val()),
  };
  console.log('employeeObject', employeeObject);

  employeeArray.push(employeeObject);
  console.table(employeeArray);

  $('#js-form-employee-fields')[0].reset();

  console.log('Employee Array', employeeArray);
}

function renderTable() {
  $('#js-table-body').empty();
  console.log('in renderTable');
  let totalMonthlySalaries = 0;

  for (let employeeObject of employeeArray) {
    let currencyConvertedSalary = currencyConverter(employeeObject.salary);
    totalMonthlySalaries += parseInt(employeeObject.salary / 12);

    $('#js-table-body').append(`
    <tr>
        <td>${employeeObject.first}</td>
        <td>${employeeObject.last}</td>
        <td>${employeeObject.id}</td>
        <td>${employeeObject.title}</td>
        <td>${currencyConvertedSalary}</td>
        <td><button id=js-delete-btn>X</button></td>
    </tr>
    `);
  }
  let currencyConvertedMonthlyTotal = currencyConverter(totalMonthlySalaries);
  console.log('converted monthly total:', currencyConvertedMonthlyTotal);

  $('#js-total-salaries').text(currencyConvertedMonthlyTotal);

  if (totalMonthlySalaries > 20000) {
    $('#js-total-salaries').addClass('redBackground');
    console.log('Over 20K');
  } else {
    $('#js-total-salaries').removeClass('redBackground');
    console.log('Under 20K');
  }
}

function deleteEmployee() {
  console.log('in deleteEmployee');
  for (let i = 0; i < employeeArray.length; i++) {
    const indexedRecord = employeeArray[i];
    console.log('record indexes', indexedRecord);
    console.log(employeeArray);
    $('#js-delete-btn').parent().parent().remove();
  }
}

///
function currencyConverter(number) {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  number = formatter.format(number);
  return number;
}

// Topics Covered
// JavaScript
// jQue ry - Selectors, append, and event handling

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
