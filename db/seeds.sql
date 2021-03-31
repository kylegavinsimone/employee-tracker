USE employeeTracker_db;

INSERT INTO departments (name) VALUES 
('Manager'),
('Foreman'),
('Worker')
;

INSERT INTO role (title, departments_id) VALUES 
('Boss', 1),
('Supervisor', 2),
('Recruit', 3)
;

INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES 
('Parker', 'Peter', 1, null),
('Grey', 'Jean', 1, 1),

('Summers', 'Scott', 2, null),
('Brock', 'Eddie', 2, 2),

('Rodgers', 'Steve', 3, null),
('Stark', 'Tony', 3, 3)

