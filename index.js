const mysql = require("mysql");
const util = require("util");
const inquirer = require("inquirer");
const create = require("./commands/create");
const see = require("./commands/see");
const updateData = require("./commands/update");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker",
});

const init = async function () {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Which would you like to do?",
      choices: [
        "See data",
        "Update employee",
        "Create new data",
      ],
    },
  ]);
}
.then(function (response) {
    switch (response.userOptions) {
      case "See data":
        see();
        break;
      case "Create new data":
        create();
        break;
      case "Exit":
      default:
        connection.end();
    }
  });


init();
