-- PART I : Customer & Profile

DROP TABLE IF EXISTS customer_profile CASCADE;
DROP TABLE IF EXISTS customer CASCADE;

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE
);
INSERT INTO customer (first_name, last_name)
VALUES 
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
    (TRUE, (SELECT id FROM customer WHERE first_name = 'John')),
    (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

-- 1
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 2
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- 3
SELECT COUNT(*) AS not_loggedin_count
FROM customer_profile
WHERE isLoggedIn = FALSE;
-- PART II : Book, Student, Library

DROP TABLE IF EXISTS library CASCADE;
DROP TABLE IF EXISTS student CASCADE;
DROP TABLE IF EXISTS book CASCADE;

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);
INSERT INTO book (title, author)
VALUES 
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

INSERT INTO student (name, age)
VALUES 
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

CREATE TABLE library (
    book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id, borrowed_date)
);

INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
    ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
     (SELECT student_id FROM student WHERE name = 'John'),
     '2022-02-15'),

    ((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
     (SELECT student_id FROM student WHERE name = 'Bob'),
     '2021-03-03'),

    ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
     (SELECT student_id FROM student WHERE name = 'Lera'),
     '2021-05-23'),

    ((SELECT book_id FROM book WHERE title = 'Harry Potter'),
     (SELECT student_id FROM student WHERE name = 'Bob'),
     '2021-08-12');

-- 1
SELECT * FROM library;

-- 2
SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

-- 3
SELECT AVG(s.age) AS avg_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 4
DELETE FROM student WHERE name = 'Bob';

SELECT * FROM library;
