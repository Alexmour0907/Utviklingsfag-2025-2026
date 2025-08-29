const images = [ 'bilder/Frosker.jpg', 'bilder/Mann.jpg', 'bilder/JapanSolnedgang.jpg'];

let currentIndex = 0;

function visBilde(currentIndex) {
    const imgElement = document.getElementById('galleriBilde');
    imgElement.src = images[currentIndex];
}

function nesteBilde() {
    currentIndex = (currentIndex + 1) % images.length;
    visBilde(currentIndex);
}

