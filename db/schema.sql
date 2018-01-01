CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    eat_date TIMESTAMP,
    PRIMARY KEY (id)
);