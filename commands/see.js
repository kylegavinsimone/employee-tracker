const inquirer = require("inquirer");
const viewEmployeeData = require('./viewEmployeesData')
const seeData = async function (connection) {
    const { table } = await inquirer.prompt([{
        type: "list",
        name: "table",
        message: "Which table shall we view?",
        choices: [
            "departments",
            "roles",
            "employees",
            "back"
        ]
    }])
    switch (table) {
        case "departments":
            const departmentTable = await connection.query("SELECT name as department FROM departments")
            console.table(departmentTable)
            break;
        case "roles":
            const roleTable = await connection.query("SELECT title name AS department from role left join department on role.departments_id = departments.id ORDER BY DEPARTMENT;")
            console.table(roleTable)
            break;
        case "employees":
            await seeEmployeesData(connection);
            break;
    }

}
module.exports = seeData;