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
            "Update Employee"
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

}

const viewEmployees = () => {

}

const addDepartment = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "addDept",
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

}

const addEmployee = () => {

}

const updateEmployee = () => {
    // update mysql - look it up 
}