-- 1. Retrieve all films with a rating of G or PG, which are not currently rented
SELECT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG') 
  AND r.rental_id IS NULL;

-- 2. Create a new table for the waiting list
CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    child_name VARCHAR(100) NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES film(film_id)
);

-- 3. Retrieve the number of people waiting for each children's DVD
SELECT f.film_id, f.title, COUNT(w.waiting_id) AS number_waiting
FROM film f
LEFT JOIN waiting_list w ON f.film_id = w.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.film_id, f.title;
