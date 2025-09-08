async function getRandomPerson(count) {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0];
}

(async () => {
    const person = await getRandomPerson(5);
    console.log(person);
})();


async function getRandomPerson(count) {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();
    return data.results;
}

(async () => {
    const people = await getRandomPerson(5);
    console.log(people);
})();




// Create element, append child