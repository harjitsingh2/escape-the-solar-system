
const planetFiles = ['./mercury.js', './venus.js', './earth.js', './mars.js'];

let currentPlanetIndex = 0;
console.log("Begin game");

function loadPlanet(currentPlanetIndex) {
    import(`${planetFiles[currentPlanetIndex]}`);    
}

const planetButton = document.getElementById('next-planet');
const body = document.querySelector('.planet');
const transition = document.querySelector('#planet-transition');

planetButton.addEventListener('click', () => {
    currentPlanetIndex++;
    transition.style.display = 'block';
    body.classList.add('fade-out');

    setTimeout(() => {
        body.classList.remove('fade-out');
        body.classList.add('fade-in');
        // transition.style.display = 'block';
        // transition.classList.add('fade-in')
        

        setTimeout(() => {
            body.classList.remove('fade-in');
            // transition.classList.remove('fade-in')
            transition.style.display = 'none';
        }, 500)

        if (currentPlanetIndex < planetFiles.length) {
            loadPlanet(currentPlanetIndex);
        }

    }, 2000)

    // if (currentPlanetIndex < planetFiles.length) {
    //     loadPlanet(currentPlanetIndex);
    // }
})

loadPlanet(currentPlanetIndex);