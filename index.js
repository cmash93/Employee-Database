const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'CAN I USE A SECRET PASSWORD?',
        database: 'X'
    },
    console.log('Connected to the X database EMOJI')
);

db.connect