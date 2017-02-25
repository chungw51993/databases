CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(250) NOT NULL,
  UNIQUE (username)
);

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  room VARCHAR(250) NOT NULL,
  UNIQUE (room)
);

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  message TEXT NOT NULL,
  username INT NOT NULL,
  FOREIGN KEY(username) REFERENCES usernames(id),
  room INT NOT NULL,
  FOREIGN KEY(room) REFERENCES rooms(id),
  createdAt TIMESTAMP NOT NULL
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

