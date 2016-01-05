CREATE DATABASE pillowtalk;

USE pillowtalk;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE logs (
  id int NOT NULL AUTO_INCREMENT,
  logtext MEDIUMTEXT NOT NULL,
  title varchar(200) NOT NULL,
  userid int NOT NULL,
  FOREIGN KEY (userid) REFERENCES users (id),
  PRIMARY KEY (id)
);

CREATE TABLE tags (
  id int NOT NULL AUTO_INCREMENT,
  tagname  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE tagsMessages (
  tagid  int   NOT NULL,
  messageid int NOT NULL,
  CONSTRAINT PK_tagsMessages PRIMARY KEY
    (
        tagid,
        messageid
    ),
  FOREIGN KEY (tagid) REFERENCES tags (id),
  FOREIGN KEY (messageid) REFERENCES logs (id)
);



