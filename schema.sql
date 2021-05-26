DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INTEGER,
  PRIMARY KEY (id)
);
CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (id)
);
INSERT INTO department (name)
VALUES ("Legal"),("Finance"),("IT"),("Sales"),("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000.00, 1),("Paralegal", 50000.00, 1),("Accountant", 50000.00, 2),("Secratary", 45000.00, 2),("Tech Support", 100000.00, 3),("Sales Rep", 60000.00, 4),("Sales Intern", 45000.00, 4),("Manager", 700000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jean Luc", "Picard", 8),("Big", "Boss", 8),("Donky", "Kong", 8),("Jenny", "Lopez", 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Becky", "Smith", 1, 10),("Jane", "Doe", 1, 10),("Joe", "Young", 2, 11),("Peter", "Parker", 3, 12),("Sarah", "Secratary", 4, 12),("Jordy", "LaForge", 5, 9),("Beverly", "Crusher",6, 9),("Wesley", "Crusher", 7, 9);

