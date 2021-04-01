DROP DATABASE IF EXISTS employeeTracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  -- id - INT PRIMARY KEY
  id INT auto_increment not null,
  -- title - VARCHAR(30) to hold role title
  PRIMARY KEY (id),
  title VARCHAR(30),
  salary DECIMAL,
  -- department_id - INT to hold reference to department role belongs to  
  department_id INT
);

CREATE TABLE employee (
  -- id - INT PRIMARY KEY
  id INT auto_increment NOT NULL,
  PRIMARY KEY (id),
  -- first_name - VARCHAR(30) to hold employee first name
  first_name VARCHAR(30),
  -- last_name - VARCHAR(30) to hold employee last name
  last_name VARCHAR(30) NOT NULL,
  -- role_id - INT to hold reference to role employee has
  role_id INT,

  -- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  manager_id INT   
);
