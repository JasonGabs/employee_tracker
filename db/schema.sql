DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL,
    
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    foreign key(department_id) REFERENCES department(id)
    
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE CASCADE
);