$(document).ready(readyNow);

function readyNow() {
  var $firstName;
  $('#submitFN').on('click', firstName);
  $('#submitFN').on('click', lastName);
  $('#submitFN').on('click', IDField);
  $('#submitFN').on('click', jobTitle);
  $('#submitFN').on('click', annualSalary);
  $('#submitFN').on('click', createTable);
  $('#submitFN').on('click', totalcostMath);
}
var employee = [];
var clickCount = 0;

function firstName(){
  employee.length=0;
  clickCount++;
  var $firstName = $('#firstName').val();
  console.log($firstName);
employee.push($firstName);
}
function lastName(){
  var $lastName = $('#lastName').val();
  console.log($lastName);
  employee.push($lastName);
}
function IDField(){
  var $IDField = $('#ID').val();
  console.log($IDField);
  employee.push($IDField);
}
function jobTitle(){
  var $JobTitle = $('#JobTitle').val();
  console.log($JobTitle);
  employee.push($JobTitle);
}
function annualSalary(){
  var $annualSalary = $('#AnnualSalary').val();
  console.log($annualSalary );
  employee.push($annualSalary);
}

// var employeeObj = function(employee){
//   this.firstname = firstName;
//   this.lastname = lastName;
//   this.IDfield = IDField;
//   this.jobTitle = jobTitle;
//   this.annualSalary = annualSalary;

// };
function createTable(){
  for (i=0; i < employee.length; i++)
var tableSelect = "<tr class=\"dataRows\" ><tr><td>" + employee[0] + "</td><td>" + employee[1] + "</td><td>" + employee[2] + "</td><td>" + employee[3] + "</td><td>" + employee[4] + "</td></tr>";
  $('table').append(tableSelect);
}

var totalAverageSalary=0;

function totalcostMath(){
totalAverageSalary = (totalAverageSalary + parseInt(employee[4])) / clickCount;
return totalAverageSalary;
}
var monthlySalary =0;
function averageMath(){
  monthlySalary = totalAverageSalary / 12;
  return monthlySalary;
}

// var employee = new employeeObject($firstName, $lastName, $IDField, $JobTitle, $annualSalary);

// function showValues() {
// var str = $("form").serialize();
// $("results").text( str );
//  }
// console.log(str);
// $('form').on('submit', function(event){
//   event.preventDefault();
// console.log( $( this ).serializeArray() );
// });
