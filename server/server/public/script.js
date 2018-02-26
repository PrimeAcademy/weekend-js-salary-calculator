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
  $('#submitFN').on('click', averageMath);
  $('#submitFN').on('click', monthlyCostAdd);
  $('#submitFN').on('click', formReset);
  $('table').on('click', 'tr', deleteFunction);

}
var employee = [];
var clickCount = 0;

console.log(clickCount);
function firstName() {
  employee.length = 0; //employeeVar
  clickCount++; //click counter to calculate monthly cost
  var $firstName = $('#firstName').val();
  console.log($firstName);
  employee.push($firstName);
}
function lastName() {
  var $lastName = $('#lastName').val();
  console.log($lastName);
  employee.push($lastName);
}
function IDField() {
  var $IDField = $('#ID').val();
  console.log($IDField);
  employee.push($IDField);
}
function jobTitle() {
  var $JobTitle = $('#JobTitle').val();
  console.log($JobTitle);
  employee.push($JobTitle);
}
function annualSalary() {
  var $annualSalary = $('#AnnualSalary').val();
  console.log($annualSalary);
  employee.push($annualSalary);
}

function createTable() {
  for (i = 0; i < employee.length; i++)
    var tableSelect = "<tr id='dataRows'><tr><td>" + employee[0] + "</td><td>" + employee[1] + "</td><td>" + employee[2] + "</td><td>" + employee[3] + "</td><td>" + employee[4] + "</td><td><button id='delete'>delete</button></td></tr>";
  $('table').append(tableSelect);
}

var totalAverageSalary = 0;

function totalcostMath() {
  totalAverageSalary = (totalAverageSalary + parseInt(employee[4]));
  return totalAverageSalary;
}
var monthlySalary = 0;
function averageMath() {
  monthlySalary = Math.round(totalAverageSalary / 12);
  return monthlySalary;
}
function monthlyCostAdd() {
  var monthlyCostVar = "<div id=\"TotalCost\"><p id=\"costCSS\">" + monthlySalary + "</p></div>";
  $('#TotalCost').html(monthlyCostVar);
}
function formReset() {
  $('#firstName').val("");
  $('#lastName').val("");
  $('#ID').val("");
  $('#JobTitle').val("");
  $('#AnnualSalary').val("");
}
function deleteFunction() {
  $(this).remove();
  monthlySalary = 0;
  var monthlyCostVar = "<div id=\"TotalCost\"><p id=\"costCSS\">" + monthlySalary + "</p></div>";
  $('#TotalCost').html(monthlyCostVar)
}
