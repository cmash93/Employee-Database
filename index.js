const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');
const logo = require('asciiart-logo')
const config = require('./package.json')
const db = require('./config/connection');



db.connect((err) => {
    if (err) throw err;
    start();
})

const start = () => {
    console.log(logo(config).render());
    mainMenu();
}

// Presents a list of user options when app is started
const mainMenu = () => {
    inquirer
    .prompt([
        {
           type: "list",
           name: "mainMenu",
           message: "INSERT MESSAGE",
           choices: [
            "View All Departments", 
            "View All Roles", 
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee",
            "Quit"
           ]
        }
    ])
    // .then((answers) => {
    //     switch (key) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // })
}

const viewDepartments = () => {
    db.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.table(res)
        mainMenu();
    })   
}

const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res)
        mainMenu();
    })  
}

const viewEmployees = () => {
    db.query('SELECT * FROM employees', (err, res) => {
        if (err) throw err;
        console.table(res)
        mainMenu();
    })  
}

const addDepartment = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "dept_name",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        }
    ])
    .then((answers) => {
        db.query('INSERT INTO departments SET ?', answers, (err, res) => {
            if (err) throw err;
            console.table(res);
            // maybe do console.log to format differently.
            mainMenu();
        })
    })
}

const addRole = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "salary",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "department_name",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        }
    ])
}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "last_name",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "title",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "manager_id",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        }
    ])
}

const updateEmployee = () => {
    // update mysql - look it up 
    inquirer
    .prompt([
        {
            type: "input",
            name: "employee_id",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        },
        {
            type: "input",
            name: "role_id",
            // name these after the columns that the data will go into
            message: "MESSAGE"
        }
    ])
}