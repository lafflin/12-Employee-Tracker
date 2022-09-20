USE business_tracker_db;

INSERT INTO department (name)
VALUES ("Store");
INSERT INTO department (name)
VALUES ("Grocery");
INSERT INTO department (name)
VALUES ("Electronics");
INSERT INTO department (name)
VALUES ("Home");

INSERT INTO role (title, salary, department_id)
VALUES ("Store Manager", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ( "Grocery Manager", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Grocery Stocker", 35000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Grocery Cashier", 30000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Electronics Manager", 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Electronics Stocker", 35000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Electronics Cashier", 30000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Home Manager", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Home Stocker", 35000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Home Cashier", 30000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brian", "Stevenson", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hector", "Bryant", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jessica", "Blake", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Puckett", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hannah", "Cross", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Larry", "Rivas", 6, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nola", "Moore", 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Zack", "Hopper", 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anika", "Goode", 8, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Callam", "Gould", 9, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Norah", "Grey", 9, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Roshan", "Boyce", 10, 10);