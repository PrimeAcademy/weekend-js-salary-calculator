$(document).ready(onReady);

function onReady () {
    $('.submit-btn').on('click', employeeInput);
    $('.table-body').on('click', '.delete-btn', deleteRow);
}

function employeeInput (event) {

    event.preventDefault()

    let firstName = $('#firt-input').val();
    let lastName = $('#last-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let annualSalary = $('#annual-input').val();

    $('.table-body').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
    `);

    $('#firt-input').val('');
    $('#last-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-input').val('');
}

function deleteRow () {
    $(this).parent().parent().remove();
}