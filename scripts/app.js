const employees = [];

$(document).ready(onReady);

function onReady() {
    const $employeesCntr = $('.js-employeesCntr');
    const $newEmployeeForm = $('.js-newEmployeeForm');

    $newEmployeeForm.on('submit', onSubmitNewEmployee);
    $employeesCntr.on('click', '.js-deleteBtn', onClickDeleteEmployee);
}

/**
 * Gather the new employee information submitted and add it to the emplopyees array.
 * @param {object} event
 */
function onSubmitNewEmployee(event) {
    event.preventDefault();
    const $form = $(this);
    const inputDataList = $form.serializeArray();
    const newEmployee = {};

    for (let i = 0; i < inputDataList.length; i++) {
        const indvInputData = inputDataList[i];
        newEmployee[indvInputData.name] = indvInputData.value;
    }
    employees.push(newEmployee);
    render();

    $form.trigger('reset');
}

// -------------------------------------------------------------------------------------------------

/**
 * On the click on the delete button for an individual employee remove that employee from the
 * employees list and re-render the view.
 */
function onClickDeleteEmployee() {
    const $delectBtn = $(this);
    let deleteId = $delectBtn.data('id');
    deleteId = parseInt(deleteId);

    employees.splice(deleteId, 1);
    render();
}

/**
 * Update the view based on the current employees list data and the total monthly salary for all
 * employees.
 */
function render() {
    const $employeesCntr = $('.js-employeesCntr');
    $employeesCntr.empty();
    for (let i = 0; i < employees.length; i++) {
        const indvEmployee = employees[i];
        $employeesCntr.append('<div></div>');
        const $employeeElem = $employeesCntr.children().last();
        $employeeElem.append(`<p>${indvEmployee.firstName}</p>`)
            .append(`<p>${indvEmployee.lastName}</p>`)
            .append(`<p>${indvEmployee.id}</p>`)
            .append(`<p>${indvEmployee.title}</p>`)
            .append(`<p>${formatSalaryAsMoney(indvEmployee.annualSalary)}</p>`)
            .append(`<button type="button" class="js-deleteBtn btn" data-id="${i}">Delete</button>`);
    }

    const totalMonthly = calculateMonthlySalary(employees);
    $('.js-totalMonthlySalary').text(formatSalaryAsMoney(totalMonthly));
}

/**
 * Calaculate the total monthly salary for allEmployees.
 * @param {array} allEmpoyees
 * @returns {number}
 */
function calculateMonthlySalary(allEmpoyees) {
    let totalSalary = 0;

    for (let indvEmployee of allEmpoyees) {
        let salaryNum = parseInt(indvEmployee.annualSalary);

        if (indvEmployee.annualSalary.indexOf('.') !== -1) {
            salaryNum = parseFloat(indvEmployee.annualSalary);
        }

        totalSalary += salaryNum;
    }
    let totalMonthlySalary = totalSalary / 12;
    const roundToNearestChange = Math.round( totalMonthlySalary * 100 ) / 100;

    return roundToNearestChange;
}

/**
 * Format a number string of the salary to a string readable as a money value.
 * @param {string} salary
 */
function formatSalaryAsMoney(salary) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    let salaryAsNumber = salary * 1;
    const salaryAsMoney = currencyFormatter.format(salaryAsNumber);

    return salaryAsMoney;
}
