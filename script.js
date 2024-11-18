// Get a reference to the #add-employees-btn element - COMPLETE
// Prompt user for employee data
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data - SOMETHING IS WRONG
const collectEmployees = function() {
  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");

    while (isNaN(salary) || salary === '') {
      salary = prompt("Invalid input. Please enter the employee's salary as a number:");
    }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    });

    addMore = confirm("Would you like to add another employee?");
  }

  // Display the collected employee data on the page
  const addEmployeesBtn = document.querySelector('#add-employees-btn');
  employees.forEach(employee => {
    const employeeItem = document.createElement('li');
    employeeItem.textContent = `${employee.firstName} ${employee.lastName} - $${employee.salary.toFixed(2)}`;
    employeeList.appendChild(employeeItem);
  });
};

// Add event listener to the button
addEmployeesBtn.addEventListener('click', collectEmployees);


// Display the average salary

const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available for the random drawing.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
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