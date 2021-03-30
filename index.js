const mysql = require("mysql");
const util = require("util");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker",
});

const init = async function () {
    const { action } = await inquirer.prompt([{
        type: "list",
        name: "action",
        message: "Which would you like to do?",
        choices: [
            "See data",
            "Update employee",
            "Create new data",
            "Delete data",
            "Quit"
        ]
    }]),


connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;

init();