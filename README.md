# Module 12 Challenge

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
  ​

## Overview

This weeks challenge was to use MySql and Node to make a CLI for tracking employees.
​

### The challenge

Create an employee tracker database and a node CLI to interact with it.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

### Links

- Solution URL: [Solution](https://github.com/lafflin/12-Employee-Tracker)
- Demo Video: [YouTube](https://youtu.be/_hWopozQFHM)
  ​

## My process

1. At first I wrote out psuedo code to break the assignment down.
2. After this I installed the necessary packages, and got straight to setting up the MySql database and the server.
3. After this, I planned out how the inquirer prompts would go, then wrote out all of the questions, leaving the querying for last.
4. Finally I finished with the queries, and wrapped up with this README and made the demo video

### Built with

- Node.js
- Express.js
- MySql
- mysql2, inquirer, dotenv, and console.table

### What I learned

- Exercise was good to practice MySql, getting a server set up, querying, and interacting with the database.

### Continued development

- More work with MySql and the databases in general.

### Useful resources

- Google, there was a lot of useful information about how to do the queries and mysql2 stuff when I was having issues.

## Author

- Linkedin - [Max McLaughlin](https://www.linkedin.com/in/max-mcla/)

## Acknowledgments

- StackOverflow, TA's, and LA's- As helpful as always
