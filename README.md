# module-3-challenge
## Employee Payroll Tracker
This week's Challenge requires you to modify starter code to create an application that enables a payroll manager to view and manage employee payroll data. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

User Story<br />

```
AS A payroll manager
I WANT AN employee payroll tracker
SO THAT I can see my employees' payroll data and properly budget for the company
```

Acceptance Criteria<br />

```
GIVEN an employee payroll tracker
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data
Mock-Up
```

## Getting Started
You will be responsible for filling out the following functions:<br />

```
collectEmployees:
```

This function will allow a user to add multiple employees to display on the page. The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop. <br />

```
while
```

loop will be needed here. The salary will need to be entered as a number, otherwise it should default to $0. The <br />

```
isNaN
```

function can help with this. This function should return an array of objects, like the following example:

```
    [
        {
            firstName:"John",
            lastName:"Smith",
            salary:12345
        },
        {
            firstName:"Jane",
            lastName:"Doe",
            salary:54321
        }
    ]
```

```
displayAverageSalary
```

This function will take in the generated array of employees and log the average salary and number of employees to the console. <br />
You should use a template literal string for this task.

```
getRandomEmployee
```

This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their <br />
full name to the console. The built in 

```
Math
```

object can help with random number generation:<br />

You do not have to modify any code for the following functions:<br />

```
displayEmployees
```

This function will take in an array of employees and render each employee to an HTML table.<br />

```
trackEmployeeData
```

This function will execute when the "Add Employees" button is clicked. It will take the array generated in your <br />

```
collectEmployees function
```

 sort the employees by last name, and place them on a table on the page using the provided <br />
 
```
displayEmployees
```

function. Additionally, the function will execute the <br />

```
displayAverageSalary
```

function to log the average employee salary to the console, and execute the <br />

```
getRandomEmployee
```

function to log a random employees information to the console.

## Grading Requirements
This Challenge is graded based on the following criteria:<br />

Function to Collect Employees 40%<br />
The collectEmployees() function must implement the following:<br />

Create a new employee object by collecting first name, last name, and salary using prompt(). (20 points)<br />

Create multiple employee objects by collecting first name, last name, and salary for each employee using prompt() and confirm(). (20 points)<br />
<br />

Function to Display Average Salary 30%
The displayAverageSalary() function must implement the following:

Calculate the average salary and log "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with no decimals. (15 points)

Calculate the average salary and log "The average employee salary between our <numberOfEmployees> employee(s) is $<averageSalaryWithTwoDecimals>" when given salaries with decimals. (15 points)

Function to Choose a Random Drawing Winner 30%
The getRandomEmployee() function must implement the following:

Choose an employee at random and log "Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!". (15 points)

Include a random selection method that allows for all employees to be chosen in the drawing. (15 points)

How to Submit the Challenge
Follow the link below to open this autograded assignment in a new tab. Once you have completed the assignment in the Ed platform, submit it and you will return to Bootcamp Spot.

note
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

important
No matter how difficult the course becomes, you must always turn in original work. Plagiarism is not tolerated. If your instructional or support staff determine that you have plagiarized work, your Student Success Advisor will determine the appropriate course of action based on university policy. Such actions may include, but are not limited to, a documented plagiarism discussion, an incomplete or failing grade assignment, or ineligibility for graduation.

This tool was successfully loaded in a new browser window. Reload the page to access the tool again.
The following content is partner provided
