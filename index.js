const inquirer = require("inquirer");
const connection = require("./db");

const init = async function () {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Which would you like to do?",
      choices: ["Add Role", "View Role", "Exit"],
    },
  ]);

  switch (action) {
    case "Add Role":
      // Add a role
      await addRole();
      break;
    case "View Role":
      // View all roles
      const roles = await getRoles();
      console.table(roles);
      break;
    case "View Departments":
      // View all roles
      const departments = await getDepartments();
      console.table(departments);
      break;
    default:
      process.exit(0);
  }
  init();
};

const getRoles = async function () {
  return await connection.query(
    "SELECT role.id AS id, title, salary, name AS department FROM role LEFT JOIN department ON role.department_id = department.id"
  );
};

const getDepartments = async function () {
  return await connection.query("SELECT * FROM department ORDER BY id");
};

const addRole = async function () {
  // Go and get all departments
  const departments = await getDepartments();

  const { title, salary, department_id } = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "What department will this role be assigned to?",
      choices: departments.map((item) => ({
        name: item.name,
        value: item.id,
      })),
    },
    {
      type: "input",
      name: "title",
      message: "What role would you like to create?",
    },
    {
      type: "input",
      name: "salary",
      message: "How much does this role make?",
    },
  ]);

  await connection.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
    [title, salary, department_id]
  );
  console.log("Role added!");
};

init();
