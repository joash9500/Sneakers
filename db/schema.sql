CREATE DATABASE sneakers;
DROP TABLE IF EXISTS listings CASCADE;
DROP TABLE IF EXISTS sneakers CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    username VARCHAR(50),
    photo_path VARCHAR(255),
    location VARCHAR(255),
    ideal_size INT,
    instagram VARCHAR(255)
);
CREATE TABLE sneakers (
    id serial PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255),
    brand VARCHAR(255),
    purchase_place VARCHAR(255),
    size INT,
    type VARCHAR(50),
    image_path VARCHAR(255),
    condition VARCHAR(50),
    users_id INT REFERENCES users(id)
);

CREATE TABLE listings (
    id serial PRIMARY KEY,
    sneaker_id INT REFERENCES sneakers(id),
    users_id INT REFERENCES users(id),
    listing_date DATE,
    location VARCHAR(255),
    selling_price INT
);

