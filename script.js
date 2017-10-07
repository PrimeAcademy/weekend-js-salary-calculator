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
  monthlySalary = Math.round(totalAverageSalary / 12);
  return monthlySalary;
}
function monthlyCostAdd(){
  var monthlyCostVar = "<div id=\"TotalCost\"><p>" + monthlySalary + "</p></div>";
  $('#TotalCost').html(monthlyCostVar);
}
