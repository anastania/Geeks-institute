--exercice 1
----------------q1
SELECT * 
FROM items
ORDER BY price ASC;
-----------------q2
SELECT * 
FROM items
WHERE price >= 80
ORDER BY price DESC;
------------------q3
SELECT firstname, lastname
FROM customers
ORDER BY firstname ASC
LIMIT 3;
---------------------q4
SELECT lastname
FROM customers
ORDER BY lastname DESC;

--exercice 2
----------q1
SELECT * 
FROM customer;
----------q2
SELECT first_name || ' ' || last_name AS full_name
FROM customer;
-------------q3
SELECT DISTINCT create_date
FROM customer;
-------------q4
SELECT *
FROM customer
ORDER BY first_name DESC;
---------------q5
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;
---------------q6
SELECT address, phone
FROM address
WHERE district = 'Texas';
--------------q7
SELECT *
FROM film
WHERE film_id IN (15, 150);
--------------------q8
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'ACADEMY DINOSAUR';
---------------q9
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'AC%';
-----------------------------q10
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;
---------------------------------q11
SELECT *
FROM film
ORDER BY rental_rate ASC
OFFSET 10 FETCH NEXT 10 ROWS ONLY;
--------------------------------q12
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;
---------------q13
SELECT *
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);
----------------------q14
SELECT ci.city, co.country
FROM city ci
JOIN country co ON ci.country_id = co.country_id;
---------------q15
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;
