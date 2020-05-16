console.log('In JavaScript');

$(document).ready(readyNow);

function readyNow(){
    console.log('In JQuery');
    $('#btn-submit').on('click', addEmployee);
}

//to hold the information, all employees will be added to an array
let employees = [];

//Create a function that takes in the information from the employee form 
//attach the function to the submit click(event), then run the function to add
function addEmployee(event){
    console.log('In addEmployee');
    //since the event triggers a refresh, prevent the default state
    event.preventDefault();
   
    //when the submit button is pushed, all the information will be gathered
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const idNumber = $('#idNumber').val();
    const position = $('#position').val();
    const annualSalary = $('#annualSalary').val();

    //the list will be added as an object and pushed to an array
    let employee = {firstName, lastName, idNumber, position, annualSalary}
    employees.push(employee);
    console.log('The employees array is:', employees);

    //once the array has been pushed we can clear the values in the table
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#position').val('');
    $('#annualSalary').val('');
}