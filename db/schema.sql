/*DROP DATABASE IF EXISTS burgers_db;*/

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger VARCHAR(45) NULL,
    devoured boolean,
    PRIMARY KEY (id)
)