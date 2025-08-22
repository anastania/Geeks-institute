-- Exercise 1: DVD Rental

-- 1)
SELECT rating, COUNT(*) AS total_films
FROM film
GROUP BY rating;

-- 2)
SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

-- 3) 
SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

-- 4) .
UPDATE customer
SET first_name = 'Anas',
    last_name = 'Serghini',
    email = 'anas.serghini@example.com'
WHERE customer_id = 1 returning *;

-- 5) :
SELECT address_id FROM customer WHERE customer_id = 1;

UPDATE address
SET address = '123 Main Street',
    district = 'Rabat',
    postal_code = '10000',
    phone = '0612345678'
WHERE address_id = (
    SELECT address_id FROM customer WHERE customer_id = 1
);
-- Exercise 2: 

-- Update
UPDATE students SET birth_date = '1998-11-02' WHERE first_name = 'Lea' AND last_name = 'Benichou';
UPDATE students SET birth_date = '1998-11-02' WHERE first_name = 'Marc' AND last_name = 'Benichou';
UPDATE students SET last_name = 'Guez' WHERE first_name = 'David' AND last_name = 'Grez';

-- Delete
DELETE FROM students WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Count
SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students WHERE birth_date > '2000-01-01';

-- Insert / Alter
ALTER TABLE students ADD COLUMN math_grade INT;
UPDATE students SET math_grade = 80 WHERE id = 1;
UPDATE students SET math_grade = 90 WHERE id IN (2,4);
UPDATE students SET math_grade = 40 WHERE id = 6;

-- Count grades > 83
SELECT COUNT(*) FROM students WHERE math_grade > 83;

-- Insert another Omer Simpson
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', (SELECT birth_date FROM students WHERE first_name='Omer' AND last_name='Simpson' LIMIT 1), 70);

-- Count how many grades each student has
SELECT first_name, last_name, COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name, last_name;

-- Sum of all grades
SELECT SUM(math_grade) FROM students;



-- Exercise 3

-- Create purchases table
CREATE TABLE purchases (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  item_id INT REFERENCES items(id),
  quantity_purchased INT
);

-- Insert purchases
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name='Scott' AND last_name='Scott'),
  (SELECT id FROM items WHERE item_name='Fan'),
  1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name='Melanie' AND last_name='Johnson'),
  (SELECT id FROM items WHERE item_name='Large Desk'),
  10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name='Greg' AND last_name='Jones'),
  (SELECT id FROM items WHERE item_name='Small Desk'),
  2
);

-- Queries
SELECT * FROM purchases;
SELECT * FROM purchases p JOIN customers c ON p.customer_id = c.id;
SELECT * FROM purchases WHERE customer_id = 5;
SELECT * FROM purchases WHERE item_id IN (
  (SELECT id FROM items WHERE item_name='Large Desk'),
  (SELECT id FROM items WHERE item_name='Small Desk')
);

-- Customers who made purchases
SELECT c.first_name, c.last_name, i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

-- Invalid insert test (item_id NULL)
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 1);
