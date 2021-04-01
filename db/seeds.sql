USE employeeTracker;

INSERT INTO department (name) VALUES 
('Manager'),
('Foreman'),
('Worker');

INSERT INTO role (title, salary, department_id) VALUES 
('Boss', 50000, 1),
('Supervisor', 70000, 2),
('Recruit', 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Parker', 'Peter', 1, null),
('Grey', 'Jean', 1, 1),
('Summers', 'Scott', 2, null),
('Brock', 'Eddie', 2, 2),
('Rodgers', 'Steve', 3, null),
('Stark', 'Tony', 3, 3);
