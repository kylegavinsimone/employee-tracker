const inquirer = require("inquirer");
const Table = require("console.table");
const findId = require("./seeId");

const departments = [
  {
    type: "input",
    message: "which department?",
    name: "name",
  },
];

const roles = [
  {
    type: "input",
    message: "what is the title?",
    name: "title",
  },
  {
    type: "list",
    message: "which department?",
    name: "department",
    choices: [],
  },
];

const employees = [
  {
    type: "input",
    message: "first name?",
    name: "first_name",
  },
  {
    type: "input",
    message: "last name?",
    name: "last_name",
  },
  {
    type: "list",
    message: "what is their role?",
    name: "role",
    choices: [],
  },
  {
    type: "list",
    message: "need their manager?",
    name: "manager",
    choices: [],
  },
];

const create = async function (connection) {
  const { table } = await inquirer.prompt([
    {
      type: "list",
      name: "table",
      message: "Which table are we creating on?",
      choices: ["Departments", "Roles", "Employees", "Go back"],
    },
  ]);
  switch (table) {
    case "departments":
      const { name } = await inquirer.prompt(departments);
      const departmentQuery = "INSERT INTO department (name) VALUES (?);";
      await connection.query(departmentQuery, [name]);
      console.log(name + " department added to database");
      break;

    case "roles":
      const departments = await connection.query("SELECT * FROM departments;");
      roles[2].choices = departments.map((element) => element.name);
      const roles = await inquirer.prompt(roles);
      let departments_id = findId(departments, "name", roles.departments);
      const roles =
        "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);";
      await connection.query(rolesQuery, [roles.title, department_id]);
      console.log(roles.title + " role added to database");
      break;

    case "employees":
      const roles = await connection.query("SELECT title, id FROM role;");
      employees[2].choices = roles.map((element) => element.title);

      const employees = await connection.query(
        "SELECT CONCAT(first_name, ' ', last_name) AS name, id FROM employees;"
      );
      employees[3].choices = employeeData.map((element) => element.name);
      employees[3].choices.push("NULL");

      const employeeRes = await inquirer.prompt(employeeQ);
      let role_id = findId(roleData, "title", employeeRes.role);
      let manager_id = findId(employees, "name", employeeRes.manager);

      const employeeQuery =
        "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
      await connection.query(employeeQuery, [
        employeeRes.first_name,
        employeeRes.last_name,
        role_id,
        manager_id,
      ]);
      console.log(
        `${employeeRes.first_name} ${employeeRes.last_name} added to employees database`
      );

      break;
  }
};

module.exports = create;
