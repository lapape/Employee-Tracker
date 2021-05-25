const mysql = require("mysql");
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
require("dotenv").config();
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: process.env.DB_USER,

  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager",
        "exit",
      ],
      name: "choice",
    })
    .then((res) => {
      switch (res.choice) {
        case "View all employees": {
          getAllEmployees();
          break;
        }
        case "View all employees by department": {
          getDepartment();
          break;
        }

        case "exit": {
          connection.end();
          break;
        }
      }
    });
}

const getAllEmployees = () => {
  //query for all rows in employee table
  connection.query(
    "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id",
    (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement in a table
      console.table(res);
      //returns user to main menu
      menu();
    }
  );
};

const getDepartment = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Which department?",
      choices: ["Legal", "Finance", "IT", "Sales"],
      name: "departments",
    })
    .then((res) => {
      switch (res.departments) {
        case "Legal": {
          connection.query(
            //select all employees where role id is 1 or 2 which are members of the Legal department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 1 OR role_id = 2",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "Finance": {
          connection.query(
            //select all employees where role id is 1 or 2 which are members of the Legal department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 3 OR role_id = 4",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "IT": {
          connection.query(
            //select all employees where role id is 1 or 2 which are members of the Legal department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 5",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
        case "Sales": {
          connection.query(
            //select all employees where role id is 1 or 2 which are members of the Legal department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 6 OR role_id = 7",
            (err, res) => {
              if (err) throw err;
              // Log all results of the SELECT statement in a table
              console.table(res);
              //returns user to main menu
              menu();
            }
          );
          break;
        }
      }
    });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  menu();
});
