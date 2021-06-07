-- USE employee_db; do i need this?


  INSERT INTO department (name)
VALUES
  ('Customer Service'),
  ('Marketing'),
  ('Management');

  INSERT INTO role (title, salary, department_id)
VALUES 
  ('Bookseller', 40000.00, 1),
  ('Marketing Director', 50000.00, 2),
  ('Human Resources', 60000.00, 3),
  ('Manager', 55000.00, 3);

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Simon', 'Hissong', 1, 4),
  ('Karina', 'Marie', 2, 4),
  ('Nico', 'Hissong', 3, NULL),
  ('Chris', 'Kraus', 4, NULL);
