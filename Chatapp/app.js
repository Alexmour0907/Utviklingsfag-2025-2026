//Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

//Databasen
const Database = require('better-sqlite3');
const db = new Database('chat_db.db');


//Port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Ruter
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/hentMeldinger', (req, res) => {
    const meldinger = db.prepare('SELECT * FROM meldinger').get();
    res.json(meldinger);
});