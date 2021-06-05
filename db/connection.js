const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    database: 'employee'
  });
  // console.log('Connected to the election database.')

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});





  module.exports = db;