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

// Legg til body-parsing for skjema/JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
  
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

// Rute som legger til en melding (klienten sender tid i format YYYY-MM-DD HH:MM:SS)
app.post('/leggMelding', (req, res) => {    
    try {
        let { person, melding, tid } = req.body;
        person = person.toString().trim();
        melding = melding.toString().trim();
        tid = tid.toString().trim();

        console.log('Mottatt melding:', { person, melding, tid });

        // Enkle lengdebegrensninger, hvorfor kan dette være lurt?
        // if (person.length > 50) person = person.slice(0, 50);
        // if (melding.length > 1000) melding = melding.slice(0, 1000);

        db.prepare('INSERT INTO melding (person, melding, tid) VALUES (?, ?, ?)')
        .run(person, melding, tid);

        return res.sendStatus(201); // viktig: avslutt responsen her
    }
    catch (err) {
        console.error('Feil ved innsending av melding:', err);
        return res.status(500).json({ error: 'Kunne ikke lagre melding' });
    }
});