const employees = [];

$(document).ready(onReady);

function onReady() {
    const $employeesCntr = $('.js-employeesCntr');
    const $newEmployeeForm = $('.js-newEmployeeForm');

    $newEmployeeForm.on('submit', onSubmitNewEmployee);
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

/**
 * Update the view based on the current employees list data and the total monthly salary for all employees.
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
            .append(`<p>${indvEmployee.annualSalary}</p>`)
            .append(`<button type="button" class="js-deleteBtn btn">Delete</button>`);
    }
}
