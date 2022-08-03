DROP TABLE IF EXISTS users Cascade;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(255),
    email text UNIQUE,
    password_hash VARCHAR(255)  
);