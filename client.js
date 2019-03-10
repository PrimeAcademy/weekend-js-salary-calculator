$(document).ready(appendEmployees);

// global variables 
let newEmployeeArray = [];


// on click of submit button, appendAllInputs function will add a new employee with these inputs
function appendAllInputs () {
    let newEmployee = {
         first: firstName = $('#firstName').val(),
         last: lastName = $('#lastName').val(),
         id: employeeId = $('#idNumber').val(),
         title: title = $('#employeeTitle').val(),
         salary: salary = $('#annualSalary').val()
    } // end newEmployee
    console.log('Added Employee: ', newEmployee);
    // put new objects into an array 
    newEmployeeArray.push(newEmployee);
    console.log('newEmployee array push', newEmployeeArray);

    // check if displayNewEmployee function works
    displayNewEmployee();
} // end appendAllInputs

    // display new employee created onto the DOM
function displayNewEmployee  () {
console.log(`in displayNewEployee function`, );

let el = $('.newEmployeeGrid');
el.empty();

    // loop through the newEmployeeArray
    for(let employee of newEmployeeArray) {
    // for each employee, create a new <div> in <div class id = "newEmployeeGrid"
    // CSS color grid, make inline text? 
    el.append(`<div>${employee.first} </div>`, `<div>${employee.last} </div>`, 
    `<div>${employee.id} </div>`, `<div>${employee.title} </div>`,`<div>${employee.salary} </div>`);

    } // end for of loop  
    

} // end displayNewEmployee

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);
} // end appendEmployees


