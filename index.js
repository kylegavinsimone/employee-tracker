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
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Which would you like to do?",
      choices: [
        "See data",
        "Update employee",
        "Create new data",
        "Delete data",
      ],
    },
  ]);
};

switch (action) {
  case "See data":
    await seeData(connection);
    init();
    break;
  case "Create new data":
    await createData(connection);
    init();
    break;
  case "Update employee":
    await updateData(connection);
    init();
    break;
  case "Delete data":
    await deleteData(connection);
    init();
    break;
  default:
    connection.end();
    break;
}
init();
