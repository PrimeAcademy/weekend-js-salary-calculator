console.log('In JavaScript');

$(document).ready(readyNow);

function readyNow(){
    console.log('In JQuery');
    $('#btn-submit').on('click', addEmployee);
    $('#employeeTableOut').on('click', '.delete', deleteRow);
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

    //append to DOM must be called before clearing values
    appendToDOM(employee);

    //once the array has been pushed we can clear the values in the table
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#position').val('');
    $('#annualSalary').val('');
}

//once all the employee information can be gathered from the DOM
//we can then display the info to a table in the DOM

function appendToDOM(object){
    console.log('In appendToDOM');
    $('#employeeTableOut').empty();
       
    const row = `<tr>
    <td>${object.firstName}</td>
    <td>${object.lastName}</td>
    <td>${object.idNumber}</td>
    <td>${object.position}</td>
    <td>${object.annualSalary}</td>
    <td><button class= "delete" id= "${object.idNumber}">Delete</button></td>
    </tr>`
    $('#employeeTableOut').append(row);

    deleteRow();
}

//Now the the table can be seen in the DOM we can now move to a delete function
//a delete button was added to the row in order to be able to remove the item as needed
//create a function that when pushed, the delete function will remove an added row

function deleteRow(){
    console.log('in deleteRow');
    $(this).closest('tr').remove();

    let idNumber = $(this).attr('id');
    for (let i = 0 ; i < employees.length; i++){
    if(employees[i].idNumber === idNumber){
      employees.splice(i,1);
    }
}
}
