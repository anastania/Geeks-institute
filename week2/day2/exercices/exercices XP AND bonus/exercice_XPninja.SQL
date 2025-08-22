-- Last 2 customers alphabetically
SELECT first_name, last_name
FROM customer
ORDER BY last_name DESC, first_name DESC
LIMIT 2;

-- Delete all payments made by Scott
DELETE FROM payment
WHERE customer_id IN (
  SELECT customer_id FROM customer
  WHERE first_name = 'Scott'
);

-- Does Scott still exist?
SELECT * FROM customer
WHERE first_name = 'Scott';

-- Payments with blank names if customer deleted
SELECT p.payment_id,
       c.first_name, c.last_name,
       p.amount, p.payment_date
FROM payment p
LEFT JOIN customer c ON p.customer_id = c.customer_id;

-- Payments without deleted customers
SELECT p.payment_id,
       c.first_name, c.last_name,
       p.amount, p.payment_date
FROM payment p
INNER JOIN customer c ON p.customer_id = c.customer_id;
