$(document).ready(onReady);

function onReady() {
    $('.submit-btn').on('click', employeeInput);
    $('.table-body').on('click', '.delete-btn', deleteRow);

}
let totalSalary = 0;
function employeeInput(event) {
    event.preventDefault()
    let employee = employeeData()
    appendEmployees(employee)
    monthlySalaryCalculator(employee)
    clearInputs()
}
function clearInputs() {
    $('#firt-input').val('');
    $('#last-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-input').val('');
}

function employeeData() {
    let employee = {
        firstName: $('#firt-input').val(),
        lastName: $('#last-input').val(),
        id: $('#id-input').val(),
        title: $('#title-input').val(),
        annualSalary: Number($('#annual-input').val()),
        dollarAnnualSalary: generateDollarString(Number($('#annual-input').val()))
    };
    return employee;
}

function appendEmployees(employee) {
    $('.table-body').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.dollarAnnualSalary}</td>
            <td class='delete-btn-cell'>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
    `);
}

function monthlySalaryCalculator(employee) {
    $('#total-ann-salary').text(function () {
        let totalSalaryNumber = Number(employee.annualSalary);
        totalSalary += totalSalaryNumber;
        let monthlySalary = totalSalary / 12;
        monthlyCostExceeded(monthlySalary);
        return generateDollarString(monthlySalary);
    });
}

function monthlyCostExceeded(monthlySalary) {
    if (Number(monthlySalary) > 20000) {
        $('#footy .footer').css('background-color', 'rgb(229, 154, 154)');
    };
}

function deleteRow() {
    $(this).parent().parent().remove();
}

function generateDollarString(dollarAsNumber) {
    let dollarString = new Intl.NumberFormat(
        'en-US',
        { style: 'currency', currency: 'USD' }
    ).format(dollarAsNumber);
    return dollarString;
}