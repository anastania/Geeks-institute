SELECT * FROM rental WHERE return_date IS NULL;

SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS unreturned_rentals
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

SELECT f.film_id, f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE a.first_name = 'Joe'
  AND a.last_name = 'Swank'
  AND c.name = 'Action';

SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address ad ON s.address_id = ad.address_id
JOIN city ci ON ad.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

SELECT s.store_id, SUM(f.length) AS total_viewing_time_minutes
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

SELECT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address ad ON c.address_id = ad.address_id
JOIN city ci ON ad.city_id = ci.city_id
WHERE ci.city_id IN (
  SELECT ci.city_id
  FROM store s
  JOIN address ad ON s.address_id = ad.address_id
  JOIN city ci ON ad.city_id = ci.city_id
);

SELECT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address ad ON c.address_id = ad.address_id
JOIN city ci ON ad.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
  SELECT co.country_id
  FROM store s
  JOIN address ad ON s.address_id = ad.address_id
  JOIN city ci ON ad.city_id = ci.city_id
  JOIN country co ON ci.country_id = co.country_id
);

SELECT SUM(f.length) AS safe_total_minutes,
       SUM(f.length)/60 AS safe_total_hours,
       SUM(f.length)/(60*24) AS safe_total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE '%beast%'
  AND f.title NOT ILIKE '%monster%'
  AND f.title NOT ILIKE '%ghost%'
  AND f.title NOT ILIKE '%dead%'
  AND f.title NOT ILIKE '%zombie%'
  AND f.title NOT ILIKE '%undead%'
  AND f.description NOT ILIKE '%beast%'
  AND f.description NOT ILIKE '%monster%'
  AND f.description NOT ILIKE '%ghost%'
  AND f.description NOT ILIKE '%dead%'
  AND f.description NOT ILIKE '%zombie%'
  AND f.description NOT ILIKE '%undead%';
