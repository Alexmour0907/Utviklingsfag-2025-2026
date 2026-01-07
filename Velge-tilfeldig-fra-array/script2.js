
Navn = ["Alexander", "Liam", "Felix", "Tim", "Matias"];

for (let i = 0; i < 2; i++){

    const hentRandomNavn = Math.floor(Math.random() * Navn.length);

    const printRandomNavn = Navn[hentRandomNavn];


 console.log (printRandomNavn);
};