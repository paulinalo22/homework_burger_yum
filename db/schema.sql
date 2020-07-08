
DROP DATABASE IF EXISTS burgers_yum_db;
  CREATE DATABASE burgers_yum_db;
  USE burgers_yum_db;

  CREATE TABLE burgers 
  (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
  );