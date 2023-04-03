$(document).ready(onReady);

function onReady () {
    $('.submit-btn').on('click', employeeInput);
    $('.table-body').on('click', '.delete-btn', deleteRow);

}
let totalSalary = 0;
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
            <td>$${annualSalary}</td>
            <td class='delete-btn-cell'>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
    `);
    $('#total-ann-salary').text(function(){
        let totalSalaryNumber = Number(annualSalary);
        totalSalary += totalSalaryNumber;
        let monthlySalary = totalSalary / 12;
        if (Number(monthlySalary) > 20000) {
            $('#footy .footer').css('background-color', 'rgb(229, 154, 154)');
        };
        return monthlySalary;
    });
    $('#firt-input').val('');
    $('#last-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-input').val('');

}

function deleteRow () {
    $(this).parent().parent().remove();
}
