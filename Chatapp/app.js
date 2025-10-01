//Server-bit, setter opp en Express-app
const express = require('express');
const app = express();

//Databasen
const Database = require('better-sqlite3');
const db = new Database('chat_db.db');


//Port
const PORT = 3000;

//console log lenken til siden på localhost
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  
//Serve statiske filer fra "public"-mappen
app.use(express.static('public'));

//Ruter
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


//Bruk .get for å hente 1 menlding, bruk .all for å hente alle. 
//Man kan velge rekkefølge med ORDER BY column_name ASC/DESC (ASC = ascending, DESC = descending)
app.get('/hentMeldinger', (req, res) => {
    const meldinger = db.prepare('SELECT * FROM meldinger').all();
    res.json(meldinger);
});
