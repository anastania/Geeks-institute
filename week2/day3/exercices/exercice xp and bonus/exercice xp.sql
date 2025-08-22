
-- EXERCISE 1

-- 1
SELECT * FROM language;

-- 2.
SELECT f.title, f.description, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. 
SELECT f.title, f.description, l.name AS language
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

-- 4. 
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


INSERT INTO new_film (name) VALUES ('The Matrix Reloaded');
INSERT INTO new_film (name) VALUES ('Inception');
INSERT INTO new_film (name) VALUES ('Avatar');

-- 5.
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT NOW()
);
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Amazing movie', 9, 'Really loved it!');

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (2, 2, 'Mind blowing', 10, 'Great concept and acting.');

-- 6.
DELETE FROM new_film WHERE id = 1;

-- EXERCISE 2

-- 1. 
UPDATE film
SET language_id = 2
WHERE film_id < 10;

-- 2.
-- customer.address_id → address.address_id
-- customer.store_id → store.store_id

-- 3.
DROP TABLE IF EXISTS customer_review;

-- 4.
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- 5. 
SELECT f.film_id, f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

-- 6.

-- 1
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE (f.description ILIKE '%sumo wrestler%' OR f.title ILIKE '%sumo%')
  AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

-- 2
SELECT title
FROM film
WHERE length < 60 AND rating = 'R' AND description ILIKE '%documentary%';

-- 3
SELECT DISTINCT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- 4
SELECT DISTINCT f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
