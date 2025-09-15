-- Create table users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL
);

-- Create table product_orders
CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Create table items
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
);

-- Function to get total price for a given order
CREATE OR REPLACE FUNCTION get_order_total(orderId INT)
RETURNS DECIMAL(10,2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(price),0) INTO total
    FROM items
    WHERE order_id = orderId;
    RETURN total;
END;
$$ LANGUAGE plpgsql;

-- Bonus: Function to get total price for a given order of a given user
CREATE OR REPLACE FUNCTION get_user_order_total(userId INT, orderId INT)
RETURNS DECIMAL(10,2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(i.price),0) INTO total
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.order_id = orderId AND po.user_id = userId;
    RETURN total;
END;
$$ LANGUAGE plpgsql;
