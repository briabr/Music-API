DROP DATABASE IF EXISTS music_api_db;
CREATE DATABASE music_api_db;

USE music_api_db;

-- artists

CREATE TABLE artists (
    id INT NOT NULL auto_increment PRIMARY KEY,
    name varchar(100),
    origin varchar(100),
    circa int
);

-- songs 
CREATE TABLE songs (
    id INT NOT NULL auto_increment PRIMARY KEY,
    title varchar(100),
    release_year int,
    duration varchar(10),
    artist_id int,
    foreign key (artist_id)
    references artists(id)
    on delete set null
);