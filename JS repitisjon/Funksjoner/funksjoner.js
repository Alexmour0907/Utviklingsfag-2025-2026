function summer (Tall1, Tall2) {
    let sum = Tall1 + Tall2
    return sum;
};

let tallNummer1 = 5;
let tallNummer2 = 10;

let resultat = summer(tallNummer1, tallNummer2);

let overskrift = document.createElement("h1");
overskrift.innerText = "Summen er " + resultat + "!";
document.body.appendChild(overskrift);

document.getElementById("knapp").addEventListener("click", siHei);
// document.querySelector("#knapp")

function siHei() {
    console.log("Hei!");
}

document.getElementById("knapp").addEventListener("click", function () {
    console.log("Ha det bra!")
} );

document.getElementById("knapp").addEventListener("click", () => {
    console.log("Denne anonyme funksjonen kjører også")
} );



let random = Math.floor(Math.random() * 10);
console.log(random);