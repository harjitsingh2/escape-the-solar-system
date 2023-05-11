
const planetFiles = ['./mercury.js', './venus.js', './earth.js', './mars.js'];

let currentPlanetIndex = 0;
console.log("Begin game");

function loadPlanet(currentPlanetIndex) {
    import(`${planetFiles[currentPlanetIndex]}`);    
}

const planetButton = document.getElementById('next-planet');

planetButton.addEventListener('click', () => {
    currentPlanetIndex++;
    if (currentPlanetIndex < planetFiles.length) {
        loadPlanet(currentPlanetIndex);
    }
})

loadPlanet(currentPlanetIndex);