$(document).ready(readyNow);

function readyNow() {
  var $firstName;
  $('#submitFN').on('click', firstName);
  $('table').on('click', 'tr', deleteFunction);

}
var employee = [];
var clickCount = 0;

console.log(clickCount);
function firstName() {
  employee.length = 0; //employeeVar
  clickCount++; //click counter to calculate monthly cost
  var $firstName = $('#firstName').val();
  var $lastName = $('#lastName').val();
  var $IDField = $('#ID').val();
  var $JobTitle = $('#JobTitle').val();
  var $annualSalary = $('#AnnualSalary').val();
  console.log($firstName);
  employee.push($firstName);
  employee.push($lastName);
  employee.push($IDField);
  employee.push($JobTitle);
  employee.push($annualSalary);
  createTable()
}


function createTable() {
    var tableSelect = "<tr id='dataRows'><tr><td>" + employee[0] + "</td><td>" + employee[1] + "</td><td>" + employee[2] + "</td><td>" + employee[3] + "</td><td>" + employee[4] + "</td><td><button id='delete'>delete</button></td></tr>";
  $('table').append(tableSelect);
  totalcostMath();
}

var totalAverageSalary = 0;

function totalcostMath() {
  totalAverageSalary = (totalAverageSalary + parseInt(employee[4]));
  totalAverageSalary;
  averageMath();
}
var monthlySalary = 0;
function averageMath() {
  monthlySalary = Math.round(totalAverageSalary / 12);
  monthlySalary;
  monthlyCostAdd();
}
function monthlyCostAdd() {
  var monthlyCostVar = "<div id=\"TotalCost\"><p id=\"costCSS\">" + monthlySalary + "</p></div>";
  $('#TotalCost').html(monthlyCostVar);
  formReset();
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
}
