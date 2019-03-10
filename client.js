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
    // empty user inputs after submit 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#employeeTitle').val('');
    $('#annualSalary').val('');
    console.log('newEmployee array push', newEmployeeArray);

    // check if displayNewEmployee function works
    displayNewEmployee();
} // end appendAllInputs

    // display new employee created onto the DOM
function displayNewEmployee  () {
console.log(`in displayNewEployee function`, );

let el = $('#ul');
el.empty();

    // loop through the newEmployeeArray
    for(let employee of newEmployeeArray) {
    // for each employee, create a new <div> in <div class id = "newEmployeeGrid"
    // NOTE appended li id = "employeeCss"
    el.append(`<div id = "employeeCss">  
                <div class = "gridItem"> ${employee.first} </div>
                <div class = "gridItem"> ${employee.last} </div>
                <div class = "gridItem"> ${employee.id} </div>
                <div class = "gridItem"> ${employee.title} </div>
                <div class = "gridItem"> ${employee.salary} </div>
                </div class>`);
    
    } // end for of loop  
    

} // end displayNewEmployee

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);
} // end appendEmployees


    