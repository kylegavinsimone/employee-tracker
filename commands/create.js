const inquirer = require("inquirer");
const cTable = require("console.table");
const findId = require("./findId");

const departmentQ = [
  {
    type: "input",
    message: "which department?",
    name: "name",
  },
];

const roleQ = [
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

const employeeQ = [
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

module.exports = addData;
