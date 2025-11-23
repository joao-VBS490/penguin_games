const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/database.sqlite");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT UNIQUE,
      senha TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS jogos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      preco REAL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS sacola (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      jogoId INTEGER
    )
  `);

  // Seed inicial dos jogos
  db.get("SELECT COUNT(*) AS total FROM jogos", (err, row) => {
    if (row.total === 0) {
      const jogosSeed = [
        ["The Last of Us", 199.9],
        ["God of War", 149.9],
        ["Hollow Knight", 29.9]
      ];

      jogosSeed.forEach(j => {
        db.run("INSERT INTO jogos (nome, preco) VALUES (?, ?)", j);
      });

      console.log("Jogos iniciais cadastrados!");
    }
  });
});

module.exports = db;