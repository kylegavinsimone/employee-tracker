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
  )
  ;
};

const addRole = async function () {
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

const getDepartments = async function () {
  return await connection.query("SELECT * FROM department ORDER BY id");
};

function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "department_name",
          message: "What is the department?",
        },
      ])
      .then((answers) => {
        connection.query(
          "INSERT INTO department SET ?",
          answers,
          function (err, data) {
            if (err) throw err;
            console.table(data);
            viewDepartments();
            init();
          }
        );
      });
  }
  function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, data) {
      if (err) throw err;
      console.table(data);
      init();
    });
  }
  
  function addEmployee() {
    connection.query("SELECT * FROM role", function (err, data) {
      if (err) throw err;
      const roles = [
        ...data.map((role) => ({
          value: role.role_id,
          name: role.title,
        })),
      ];
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "Enter first name.",
        },
        {
          type: "input",
          name: "last_name",
          message: "Enter last name.",
        },
        {
          type: "list",
          name: "role_id",
          message: "Enter role",
          choices: roles,
        },
      ])
      .then((answers) => {
        connection.query(
          "INSERT INTO employee SET ?",
          answers,
          function (err, data) {
            if (err) throw err;
            console.table(data);
            viewEmployee();
            init();
          }
        );
      });
    });
  }

