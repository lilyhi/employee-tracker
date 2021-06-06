const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');
const cTable = require("console.table");
// const fs = require("fs"); i dont think we need this one?



// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, 
// view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids


// inquirer - Create questions for user input
function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'startOptions',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department','Add a role', 'Add an employee', 'Update an employee role', 'Exit app']
      },
    ])
    .then((selection) => {
      switch(selection.StartOptions) {
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
        case "Add a role'":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateRole();
          break;
        case "Exit application":
          exitApp();
          break;
        
        default:
          console.log('Goodbye!');
          exitApp();
          // i think i need to add exitApp function to end the app
      }
    });
} //END START OF APP FUNCTION


// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// selected ALL DEPTS
function viewDepartments() {

}

function viewRoles() {

}

function viewEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}

function exitApp() {

}





// Function call to initialize app
startApp();