DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(8, 2),
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id)
    REFERENCES departments(dept_id)
);

ALTER TABLE roles AUTO_INCREMENT = 101;

CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (employee_id),
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id),
    FOREIGN KEY (manager_id)
    REFERENCES employees(employee_id)
);

ALTER TABLE employees AUTO_INCREMENT = 1001;


