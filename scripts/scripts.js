console.log('In JavaScript');

$(document).ready(readyNow);

function readyNow(){
    console.log('In JQuery');
    $('#btn-submit').on('click', addEmployee);
}

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
    
}