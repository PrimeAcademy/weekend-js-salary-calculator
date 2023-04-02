$(document).ready(onReady);

function onReady () {
    $('.submit-btn').on('click', employeeInput);
    $('.table-body').on('click', '.delete-btn', deleteRow);
    let total = 0;
}
let total = 0
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
            <td class='delete-btn-cell'>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
    `);
    $('#total-ann-salary').text(function(){
        total += Number(annualSalary);
        return total;
    });
    $('#firt-input').val('');
    $('#last-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-input').val('');

    if (Number(total) > 20000) {
        $('#footy .footer').css('background-color', 'rgb(229, 154, 154)');
    }

}

function deleteRow () {
    $(this).parent().parent().remove();
}
function makeRed() {
    
}