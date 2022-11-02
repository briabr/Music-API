const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'music_api_db'
    },
    console.log(`Connected to music_api_db database.`)
  );
  module.exports = db