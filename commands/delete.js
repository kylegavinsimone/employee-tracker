const inquirer = require("inquirer");
const deleteData = async function (connection) {
  const { table } = await inquirer.prompt([
    {
      type: "list",
      name: "table",
      message: "where are we deleting from?",
      choices: ["employee", "back"],
    },
  ]);
  switch (table) {
    case "employee":
      const employeeList = await connection.query(
        "SELECT CONCAT(first_name, ' ', last_name) as name, id from employee"
      );
      const { employeeId } = await inquirer.prompt({
        type: "list",
        name: "employeeId",
        message: "who got fired?",
        choices: employeeList.map((element) => ({
          name: element.name,
          value: element.id,
        })),
      });
      await connection.query("delete From employee where id=?", [employeeId]);
      console.log("bye bye");
      break;
  }
};

module.exports = deleteData;
