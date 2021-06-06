const mysql = require('mysql2');


require('dotenv').config();

// Connect to database
const db = mysql.createConnection(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    // Your MySQL username,
    // user: '',
    // Your MySQL password,
    // password: '',
    // database: 'employee'
  });
  console.log('Connected to the Employee database.')



// if this ^^ doesnt work then use:
// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: '',
  // Your MySQL password,
  password: '',
  database: 'employee'
});
// console.log('Connected to the Employee database.')  




  module.exports = db;