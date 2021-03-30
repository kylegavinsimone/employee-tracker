CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE departments (
-- id 
-- - INT PRIMARY KEY
    -- name -  -- VARCHAR(30)
    ID int NOT NULL,
    LastName varchar(30) NOT NULL,
    FirstName varchar(30),
    PRIMARY KEY (ID)
)

CREATE TABLE roles (
-- id - INT PRIMARY KEY
ID int NOT NULL,
-- title - VARCHAR(30) to hold role title
title varchar(30) NOT NULL,
-- salary - DECIMAL to hold role salary

-- department_id - INT to hold reference to department role belongs to  
ID int NOT NULL
)

CREATE TABLE employees (
-- id - INT PRIMARY KEY
 PRIMARY KEY (ID)
-- first_name - VARCHAR(30) to hold employee first name
FirstName varchar(30),
-- last_name - VARCHAR(30) to hold employee last name
LastName varchar(30) NOT NULL,
-- role_id - INT to hold reference to role employee has

-- manager_id - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

    
)