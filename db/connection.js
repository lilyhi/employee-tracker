const mysql = require('mysql2');


// require('dotenv').config();

// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password,
  password: 'Lisasays7!',
  database: 'employee_db'
});

console.log(`Connected to the employee_db database.`)  




module.exports = db;