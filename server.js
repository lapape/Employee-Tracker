const mysql = require("mysql");
const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
require("dotenv").config();
const cTable = require("console.table");

const managerArray = [];

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
        "View all employees by role",
        // "View all employees by manager",
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
        case "View all employees by role": {
          getRole();
          break;
        }
        // case "View all employees by manager": {
        //   getManager();
        //   break;
        // }
        case "Add employee": {
          getManagers();
          break;
        }
        case "Remove employee": {
          getManagers();
          break;
        }
        case "Update employee role": {
          getManagers();
          break;
        }
        case "Update employee manager": {
          getManagers();
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
      choices: ["Legal", "Finance", "IT", "Sales", "Management"],
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
            //select all employees where role id is 2 or 3 which are members of the Finance department
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
            //select all employees where role id is 5 which are members of the IT department
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
            //select all employees where role id is 6 or 7 which are members of the Sales department
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
        case "Management": {
          connection.query(
            //select all employees where role id is 8 which are members of the Management department
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 8",
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

const getRole = () => {
  inquirer
    .prompt({
      type: "list",
      message: "Which role?",
      choices: [
        "Lawyer",
        "Paralegal",
        "Accountant",
        "Secratary",
        "Tech Support",
        "Sales Rep",
        "Sales Intern",
        "Manager",
      ],
      name: "roles",
    })
    .then((res) => {
      switch (res.roles) {
        case "Lawyer": {
          connection.query(
            //select all employees where role id is 1 for Lawyer
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 1",
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
        case "Paralegal": {
          connection.query(
            //select all employees where role id is 2 for Paralegal
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 2",
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
        case "Accountant": {
          connection.query(
            //select all employees where role id is 3 for Accountant
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 3",
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
        case "Secratary": {
          connection.query(
            //select all employees where role id is 4 for Secratary
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 4",
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
        case "Tech Support": {
          connection.query(
            //select all employees where role id is 5 for Tech Support
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
        case "Sales Rep": {
          connection.query(
            //select all employees where role id is 6 for Sales Rep
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 6",
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
        case "Sales Intern": {
          connection.query(
            //select all employees where role id is 7 for Sales Intern
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 7",
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
        case "Manager": {
          connection.query(
            //select all employees where role id is 8 for Manager
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id WHERE role_id = 8",
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

function getManagers() {
  connection.query("SELECT * FROM employee WHERE role_id = 8", (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      managerArray.push(res[i].first_name);
    }
    console.log(managerArray);
    // Log all results of the SELECT statement
    addEmployee(managerArray);
  });
}

const addEmployee = (managerArray) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the Employee's last name?",
        name: "lastName",
      },
      {
        type: "rawlist",
        message: "What is the Employee's role?",
        name: "role",
        choices: [
          "Lawyer",
          "Paralegal",
          "Accountant",
          "Secratary",
          "Tech Support",
          "Sales Rep",
          "Sales Intern",
          "Manager",
        ],
      },
      {
        type: "rawlist",
        message: "Who is the Employee's Manager?",
        name: "manager",
        choices: managerArray,
      },
    ])
    .then((res) => {
      console.log(res);
      const query = connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.firstName,
          last_name: res.lastName,
          role_id: Number(res.role),
          manager_id: Number(res.manager),
        },
        (err, res) => {
          if (err) throw err;
          console.log(res);
          menu();
        }
      );
    });
};

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  menu();
});
