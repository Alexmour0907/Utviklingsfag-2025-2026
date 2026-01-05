
Navn = ["Alexander", "Maria", "Jonas", "Sofia", "Emil"];

const hentRandomNavn = Math.floor(Math.random() * Navn.length);

const randomNavn = Navn[hentRandomNavn];

console.log("Vinner av lotteri " + randomNavn + ", med indeks lik: " + hentRandomNavn);
