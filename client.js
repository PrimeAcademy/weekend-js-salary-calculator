$(document).ready(readyNow);

function readyNow () {
appendEmployees();


function addFirstName () {
    
    let firstName = $('#firstName').val();
    console.log(firstName);
} // end firstName function 

function addLastName () {
    let lastName = $('#lastName').val();
        console.log(lastName);
} // end lastName function 

function addId () {
    let employeeId = $('#idNumber').val();
        console.log(employeeId);
}  // end addId
function addTitle () {
    let title = $('#employeeTitle').val();
        console.log(title);
} // end addTitle
function addSalary () {
    let salary = $('#annualSalary').val();
        console.log(salary);
}

// append employee properties on click
function appendEmployees () {
    $('#submitButton').on('click', addFirstName);
    $('#submitButton').on('click', addLastName)
    $('#submitButton').on('click', addId)
    $('#submitButton').on('click', addTitle )
    $('#submitButton').on('click', addSalary)
} // end appendEmployees
} // end readyNow




