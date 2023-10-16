const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'roxieDog123$sql',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

function masterOptionsList() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'masterList',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee information', 'Exit']
            }
        ])
        .then((data) => {
            switch (data.masterList) {
                case 'View all departments':
                    viewAllDepartments()
                    break
                case 'View all roles':
                    viewAllRoles()
                    break
                case 'View all employees':
                    viewAllEmployees()
                    break
                case 'Add a department':
                    addADepartment()
                    break
                case 'Add a role':
                    addARole()
                    break
                case 'Add an eployee':
                    addAEmployee()
                    break
                case 'Update employee information':
                    updateAEmployee()
                    break
                case 'Exit':
                    exit()
                    break
            }
        })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log("");
        console.table(results)
        if (err) {

            console.log(err)
            return
        }
    })
    masterOptionsList();
}
function viewAllRoles() {
    db.query('SELECT role.id, role.name, role.salary, department.name AS "Deparment" FROM role LEFT JOIN Department ON role.deparment_id', function (err, results) {
        console.log("");
        console.table(results)
        if (err) {

            console.log(err)
            return
        }
    })
    masterOptionsList();
}
function viewAllEmployees() {
    db.query('SELECT employees.id, employees.first_name, employees.last_name, role.name AS name, role.salary AS salary, department.name AS department, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employees manager ON employees.manager_id = manager.id', function (err, results) {
        console.log("");
        console.table(results);
        if (err) {
            
            console.log(err);
            return
        }
    })
    masterOptionsList();
}
function addADepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter deparment name ',
            },
            {
                type: 'confirm',
                name: 'confirmAddDeparment',
                message: 'Would you like to add another deparment?',
            },
        ])
        .then(({ text, confirmAddDepartment }) => {
            db.query('INSERT INTO department(name) values ?')
        });
}
function addARole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter role name',
            },
            {
                type: 'confirm',
                name: 'confirmAddRole',
                message: 'Would you like to add another role?',
            },
        ])
        .then(({ text, confirmAddRole }) => {

        });
}
function addAEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter employees name',
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
            },
        ])
        .then(({ text, confirmAddEmployee }) => {

        });
}
function updateAEmployee() {

}

function exit() {
    process.exit();
}