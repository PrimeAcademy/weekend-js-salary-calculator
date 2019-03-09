$(document).ready(appendEmployees);


function appendAllInputs () {

    let firstName = $('#firstName').val();
    console.log(firstName);

    let lastName = $('#lastName').val();
        console.log(lastName);

    let employeeId = $('#idNumber').val();
        console.log(employeeId);

    let title = $('#employeeTitle').val();
        console.log(title);

    let salary = $('#annualSalary').val();
        console.log(salary);

} // end appendAllInputs 

// append employee properties on submit button click 
function appendEmployees () {
    $('#submitButton').on('click', appendAllInputs);
} // end appendEmployees




