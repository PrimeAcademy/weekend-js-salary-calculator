#Weekend Challenge 1: Salary Calculator

For your weekend challenge, you will need to create an application that records employees along with their salary. We also want to add the salaries up so we know how much we’re spending each month.

The application should first have an input form that collects the following:

- Employee First Name

- Employee Last Name

- ID Number

- Job Title

- Annual Salary



A 'Submit' button should clear out the inputs and your logic should store that information. Then, that information should be appended to the DOM so the user of the application can see the information they just entered.

Finally, your logic should calculate all of the employee salaries and report back the Monthly cost of salaries.

##Hard Mode
Create a delete button that removes an employee from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total.

##Pro Mode
Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.

Good Luck, have a great weekend!
