
// For loop
// Når du vet hvor mange ganger du vil kjøre løkken
// setter i til null, sjekker betingelsen, og øker i med 1 hver gang til betingelsen er møtt
for (let i = 0; i <= 3; i++) {
    console.log(i);
}



// While loop
// Når du ikke vet hvor mange ganger du vil kjøre løkken
// setter count til null
// sjekker betingelsen før hver iterasjon
// øker count med 1 hver gang til betingelsen er møtt
let count = 0;

while (count <= 3) {
    console.log(count);
    count++;
}

// Do...while loop
// Ligner på while loop
// sjekker betingelsen etter hver iterasjon

let telling = 0;
do {
    console.log(telling);
    telling++;
} while (telling <= 3);

