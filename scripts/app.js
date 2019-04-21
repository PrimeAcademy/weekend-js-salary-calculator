const employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('document is ready');
    const $employeesCntr = $('.js-employeesCntr');
    const $newEmployeeForm = $('.js-newEmployeeForm');

    $newEmployeeForm.on('submit', onSubmitNewEmployee);
}

/**
 * Gather the new employee information submitted and add it to the emplopyees array.
 * @param {object} event
 */
function onSubmitNewEmployee(event) {
    console.log(event);
    event.preventDefault();
    const $form = $(this);
    console.log('$form', $form);
    const inputDataList = $form.serializeArray();
    const newEmployee = {};

    for (let i = 0; i < inputDataList.length; i++) {
        const indvInputData = inputDataList[i];
        newEmployee[indvInputData.name] = indvInputData.value;
    }
    employees.push(newEmployee);

    $form.trigger('reset');
    console.log('newEmployee', newEmployee);
    console.log('employees', employees);
}