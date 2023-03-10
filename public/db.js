const sqlite3 = require('sqlite3');
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');

const db = new sqlite3.Database(
    isDev
      ? path.join(__dirname, '../db/pair-system.db') // my root folder if in dev mode
      : path.join(process.resourcesPath, 'db/pair-system.db'), // the resources path if in production build
    (err) => {
      if (err) {
        console.log(`Database Error: ${err}`);
      } else {
        console.log('Database Loaded');
      }
    }
  );

const initDB = () => {
  db.run(`CREATE TABLE IF NOT EXISTS player (
    player_id TEXT NOT NULL UNIQUE,
    first_name TEXT,
    last_name TEXT,
    PRIMARY KEY (player_id)
  )`);
}

module.exports = {db, initDB}