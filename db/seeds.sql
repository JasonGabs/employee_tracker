INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Gabianelli', 1, 1),
       ('Joe', 'Shmoe', 1, 1);

INSERT INTO department (dept_name)
VALUES ('sales'),
       ('R and D'),
       ('HR'),
       ('Finnance');

INSERT INTO role (role_name, salary, department_id)
VALUES ('Sales Lead', 70000, 1),
       ('Sales Rep', 70000, 1),
       ('Lead Reasearch Person', 80000, 2),
       ('Lower Reaserch Person', 60000, 2),
       ('HR Lead', 60000, 3),
       ('HR Support Person', 50000, 3),
       ('Finnance Lead', 80000, 4),
       ('Finnance Support', 60000, 4);
