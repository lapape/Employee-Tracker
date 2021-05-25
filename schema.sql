DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INTEGER,
  PRIMARY KEY (id)
);
CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (id)
);
INSERT INTO department (name)
VALUES ("Legal"),("Finance"),("IT"),("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000.00, 1),("Paralegal", 50000.00, 1),("Accountant", 50000.00, 2),("Secratary", 45000.00, 2),("Tech Support", 100000.00, 3),("Sales Rep", 60000.00, 4),("Sales Intern", 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Becky", "Smith", 1, 1),("Jane", "Doe", 1, 1),("Joe", "Young", 2, 1),("Peter", "Parker", 3, 2),("Sarah", "Secratary", 4, 2),("Jordy", "LaForge", 5, 3),("Beverly", "Crusher",6, 4),("Wesley", "Crusher", 7, 4)