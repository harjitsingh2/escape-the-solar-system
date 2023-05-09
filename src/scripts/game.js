import Planet from './planet.js';
import './mercury.js'
// import './venus.js'

console.log("Begin game")


const submitButton = document.getElementById('submit');

submitButton.addEventListener("click", () => {
console.log("Quiz has been submitted");
})


/*
plan for loading new planets:
1. create a table of planets
// const planets = [mercury, venus];
2. when beginning game, start at planets[0]
3. create a button for "Go to next planet"
4. add event listener on that button to render planets[1] and remove planets[0]

*/

let mercury = new Planet;

function makePlanet1() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    mercury.makeMercury(ctx);
}
makePlanet1();


let venus = new Planet;

function makePlanet2() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    venus.makeVenus(ctx);
}
makePlanet2();

