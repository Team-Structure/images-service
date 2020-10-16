DROP DATABASE IF EXISTS images_service;

CREATE DATABASE images_service;

USE images_service;

CREATE TABLE product_images (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  s3_url text NOT NULL,
  PRIMARY KEY (id)
);