let arrayNavn = ["Ola", "Kari", "Per"];

console.log(arrayNavn);

for (let navn of arrayNavn) {
    console.log(navn);
}

console.log(arrayNavn[1]);

const person = {
    navn: "Olaien",
    alder: 250,
    yrke: "utvikler"
}; 

console.log(person)
console.log(person.navn)

let arrayPersoner = [
    {
        navn: "Ola",
        alder: 25,
    },
    {
        navn: "Kari",
        alder: 30,
    },
    {
        navn: "Per",
        alder: 35,
    }
];

console.log(arrayPersoner);
console.log(arrayPersoner[1]);
console.log(arrayPersoner[1].navn);

arrayPersoner.push(person);


console.log("\nher kommer alle personene i arrayen:")

// for (let person of arrayPersoner) {
//     console.log(person.navn);
// }

for (let index = 0; index < arrayPersoner.length; index++) {
    console.log(arrayPersoner[index].navn)
}

console.log("\nalle personene med alder over 30:");

for (let person of arrayPersoner) {
    if (person.alder >= 30) {
        console.log(person.navn);
    }
}

