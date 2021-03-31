DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE departments (
  department_id INT UNSIGNED AUTO_INCREMENT,
  department_name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (department_id)
);

CREATE TABLE roles (
-- id - INT PRIMARY KEY
ID INT auto_increment not null,
-- title - VARCHAR(30) to hold role title
PRIMARY KEY (ID),

title varchar(30),
-- department_id - INT to hold reference to department role belongs to  
departments int
);

CREATE TABLE employees (
-- id - INT PRIMARY KEY
  ID INT auto_increment not null,
PRIMARY KEY (id),
-- first_name - VARCHAR(30) to hold employee first name
first_name varchar(30),
-- last_name - VARCHAR(30) to hold employee last name
last_name varchar(30) NOT NULL,
-- role_id - INT to hold reference to role employee has
role_id int,
-- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
manager_id int
    
    )