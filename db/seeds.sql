INSERT INTO department (dept_name)
VALUES ("Managers"),
       ("Service Staff"),
       ("Support Staff"),
       ("Kitchen Staff");

INSERT INTO roles (title, salary, department_id)
VALUES ("General Manager", 80000, 1),
       ("Head Chef", 80000, 1),
       ("Bar Manager", 60000, 1),
       ("Service Manager", 60000, 1),
       ("Kitchen Manager", 50000, 1),
       ("Bartender", 80000, 2),
       ("Server", 60000, 2),
       ("Food Runner", 35000, 3),
       ("Server Assistant", 30000, 3),
       ("Host", 30000, 2),
       ("Line Cook", 45000, 4),
       ("Prep Cook", 35000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lindy", "Poindexter", 101, null),
       ("Ashton", "Anderson", 102, null),
       ("Dylan", "Knox", 104, 1001),
       ("Jeremiah", "Clark", 103, 1001),
       ("Chase", "Carlson", 105, 1002),
       ("Tobin", "Ross", 106, 1003),
       ("Alison", "Meyers", 107, 1004),
       ("Cody", "Black", 108, 1005),
       ("James", "Montemayor", 109, 1004),
       ("Ellie", "Smith", 110, 1004),
       ("Will", "Ferguson", 111, 1005),
       ("Taylor", "Davidson", 112, 1005);