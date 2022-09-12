# Psuedo Code for 12

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

## Psuedo Code

```md
- use inquirer to make another node cli
  - also use mysql2, sequelize, and console.table
- when started, the application allows you to view all departments, roles, employees, add a department, role, or employee, and update an employees role
  - when viewing all departments, you see a (formatted) table showing department names and ids
  - when viewing all employees, you see a (formatted) table showing ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  - when choosing to add a department, prompted to enter the name of the department, then it is added to DB
  - when choosing to add an employee, prompted to enter their first, last, role, and manager. they are then added to the DB
    - when choosing to update an employee, simply choose an employee and their new role, then it is saved to the DB
```
