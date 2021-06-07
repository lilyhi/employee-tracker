const inquirer = require("inquirer");
const db = require("./db/connection");
const mysql = require("mysql2");
const cTable = require("console.table");


// inquirer - Create questions for user input
function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "startOptions",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit app",
        ],
      },
    ])
    .then((selection) => {
      switch (selection.startOptions) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateRole();
          break;
        case "Exit app":
          console.log("Goodbye!");
          process.exit();
          break;

        default:
          console.log("Goodbye!");
          process.exit();
      }
    });
} //END START OF APP FUNCTION


// selected View Depts
function viewDepartments() {
  db.query("SELECT * FROM department", (error, response) => {
    if (error) {
      console.log(error);
    }
    // Display department data in table
    console.table(response);
    // ask the questions again
    startApp();
  });
}

// selected View all roles
function viewRoles() {
  db.query("SELECT * FROM role", (error, response) => {
    if (error) {
      console.log(error);
    }
    // Display role data in table
    console.table(response);
    // ask the questions again
    startApp();
  })
}

// selected View employees
function viewEmployees() {
  db.query("SELECT * FROM employee", (error, response) => {
    if (error) {
      console.log(error);
    }
    // Display employee data in table
    console.table(response);
    // ask the questions again
    startApp();
  })
}

// selected Add dept
function addDepartment() {
  console.log("Adding a new Department");
  inquirer
    .prompt([
      {
        type: "input",
        name: "deptName",
        message: "Please enter the department name.",
      },
    ])
    .then((answerDept) => {
      db.query(
        "INSERT INTO department SET ?",
        { name: answerDept.deptName },
        (error, response) => {
          if (error) console.log(error);

          console.log("Department added!");

          startApp();
        }
      );
    });
}

// selected Add role
function addRole() {
  console.log("Adding a new role");
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter the role name.",
      },
      {
        type: "input",
        name: "salary",
        message: "Please enter the salary for the role.",
      },
      {
        type: "input",
        name: "deptID",
        message: "Please enter the department ID",
      },
    ])
    .then((answerRole) => {
      db.query(
        "INSERT INTO role SET ?",
        { title: answerRole.title, 
          salary: answerRole.salary, 
          department_id: answerRole.deptID },
        (error, response) => {
          if (error) console.log(error);

          console.log("Role added!");

          startApp();
        }
      );
    });
}

// selected Add employee
function addEmployee() {
  console.log("Adding a new employee");
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Please enter employees first name.",
      },
      {
        type: "input",
        name: "lastName",
        message: "Please enter employees last name.",
      },
      {
        type: "input",
        name: "roleID",
        message: "Please enter the role ID",
      },
      {
        type: "input",
        name: "empDeptID",
        message: "Please enter the department ID",
      },
    ])
    .then((answerEmployee) => {
      db.query(
        "INSERT INTO employee SET ?",
        { first_name: answerEmployee.firstName,
          last_name: answerEmployee.lastName,
          role_id: answerEmployee.roleID,
          manager_id: answerEmployee.empDeptID},
        (error, response) => {
          if (error) console.log(error);

          console.log("Employee added!");

          startApp();
        }
      );
    });
}

// selected Update role
// function updateRole() {
//   console.log("Update role");

// }

// Function call to initialize app
startApp();



// const sql = `SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id;`

// db.query(sql, (error, response) => {
    // console.log(error);

    // console.log();
// })

// job titles(role), departments, salaries, and managers(not id)
// SELECT * FROM employee 
// LEFT JOIN role ON employee.role_id = role.id;

// SELECT employee.*, role.role_id AS title
// FROM employee
// LEFT JOIN role ON employee.role_id = role.id;

// SELECT employee 