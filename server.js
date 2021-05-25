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

        case "exit": {
          connection.end();
          break;
        }
      }
    });
}

const getAllEmployees = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    menu();
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  menu();
});
