const overskrift = document.createElement("h1");
overskrift.innerText = "Dette er en overskrift";
document.body.appendChild(overskrift);

const knapp1 = document.createElement("button");
knapp1.innerText = "Trykk på meg";
knapp1.id = "knapp1";
document.body.appendChild(knapp1);
knapp1.addEventListener("click", trykk);
knapp1.style.backgroundColor = "yellow";

const knapp2 = document.createElement("button");
knapp2.innerText = "Trykk på meg 2";
knapp2.id = "knapp2";
document.body.appendChild(knapp2);
knapp2.addEventListener("click", trykk);
knapp2.style.backgroundColor = "lightgreen";

function trykk(evt) {
    console.log(evt.target.id)
};

const bilde = document.createElement("img");
bilde.src = '/JS repitisjon/Bildegalleri/bilder/Frosker.jpg'
document.body.appendChild(bilde);
bilde.style.filter = "invert(1)";