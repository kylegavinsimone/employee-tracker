const inquirer = require("inquirer");
const viewEmployeeData = require('./viewEmployeeData')
const viewData = async function (connection) {
    const { table } = await inquirer.prompt([{
        type: "list",
        name: "table",
        message: "Which table shall we view?",
        choices: [
            "department",
            "role",
            "employee",
            "back"
        ]
    }])
    switch (table) {
        case "department":
            const departmentTable = await connection.query("SELECT name as department FROM department")
            console.table(departmentTable)
            break;
        case "role":
            const roleTable = await connection.query("SELECT title name AS department from role left join department on role.department_id = department.id ORDER BY DEPARTMENT;")
            console.table(roleTable)
            break;
        case "employee":
            await viewEmployeeData(connection);
            break;
    }

}
module.exports = viewData;