// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  var employees = [];
  var continuePrompt = true;

  while (continuePrompt) {
// Creates three prompts while user continues to hit 'OK.' 
let firstName = prompt("Enter Employee First Name:") 
let lastName = prompt("Enter Employee Last Name:") 
let salary = prompt("Enter Employee Salary:") 

// Ensures the salary is read as a number instead of a string.
salary = parseFloat(salary);

// Checks if 'salary' is a valid number, if not, converts to 0.
  if (isNaN(salary)) {
    salary = 0;
}

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  }
  employees.push(employee)

// Exits out of the prompt loop if user hits 'cancel.'
  continuePrompt = confirm('Continue adding employees?')
}
  return employees
  
};


  // Calculate and display the average salary
  const displayAverageSalary = function(employeesArray) {
    let total = 0;
    // Creates a for loop that iterates over 'employeesArray' that continues as long as 'i' is less than the length of employeesArray.
    for(let i = 0; i < employeesArray.length; i++) {
      total += employeesArray[i].salary;
    }
    let average = total / employeesArray.length;

    // Displays salary to console.
    console.log(`The average salary of all employees is: $` + average) 
  }

  

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Grabs a random name from the employeesArray
let randomArray = Math.floor(Math.random() * employeesArray.length);
let randomEmployee = employeesArray[randomArray];

// Displays random employeee to console.
console.log("The Employee of the Month is:", randomEmployee.firstName + " " + randomEmployee.lastName);

} 



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
