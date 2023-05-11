import Planet from './planet.js';


let mercury = new Planet;

function makePlanet1() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    mercury.makeMercury(ctx);
}
makePlanet1();

console.log("Welcome to Mercury");

// array of questions and answer objects
let questions = [
    {
        question: "Mercury might be the smallest planet in our solar system, but it is also the fastest - traveling 29 miles per second! This is due to its proximity to the Sun. Even though it is so close to the Sun, it is not the hottest planet in our solar system. Venus is actually the hottest. Mercury has no rings or moons. The small, terrestrial planet does not have an atmosphere. It does have a thin exosphere made of oxygen, sodium, hydrogen, helium, and potassium, in descending order."
    },
    {
        question: "Mercury is the _______ planet from the Sun",
        answers: {
            a: "first",
            b: "second",
            c: "third"
        },
        correctAnswer: 'a'
    },
    {
        question: "What is Mercury's exosphere primarily composed of?",
        answers: {
            a: "hydrogen",
            b: "mercury",
            c: "oxygen"
        },
        correctAnswer: 'c'
    },
    {
        question: "How fast does Mercury travel?",
        answers: {
            a: "29 miles per second",
            b: "290 miles per second",
            c: "2900 miles per second"
        },
        correctAnswer: 'a'
    }
];

// get references to HTML elements
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const planetButton = document.getElementById('next-planet');

// create our game quiz
function buildQuiz(){
    // store the HTML output
    let output = [];
  
    questions.forEach(
      (currentQuestion, questionNumber) => {
        // store the list of possible answers
        let possibleAnswers = [];
  
        // add radio button for each possible answer and add to array 
        for(let letter in currentQuestion.answers){
          possibleAnswers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter})
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output array
        if (questionNumber === 0) {
            output.push(
                `<div class="slide active-slide">
                  <div class="question"> ${currentQuestion.question} </div>
                  <div class="answers"> ${possibleAnswers.join('')} </div>
                </div>`)
        } else {
            output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${possibleAnswers.join('')} </div>
          </div>`
        );  
        }
      }
    );
  
    // combine  output list into one string of HTML and display on page
    quizContainer.innerHTML = output.join('');
  }

// show results to quiz  
function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

  
    // find answer for each question
    questions.forEach( (currentQuestion, questionNumber) => {
      let answerContainer = answerContainers[questionNumber];
      let selector = `input[name=question${questionNumber}]:checked`;
      let userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // debugger;
      if(userAnswer === currentQuestion.correctAnswer){
        score++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
      return score;
    });
    score = score - 1;
    // const showAnswers = quizContainer.querySelector('.slide');
    
    // how can I set the opacity to 10 after we show results?
    // showAnswers.style.opacity = 0;
    resultsContainer.style.opacity = 10;
    resultsContainer.innerHTML = `Your score: ${score} / ${(questions.length-1)}`;

    submitButton.removeEventListener('click', showResults);
    startButton.removeEventListener("click", showNextSlide);
    nextButton.removeEventListener("click", showNextSlide);
}

// function to create slides of questions
function showSlide(n) {
    // debugger 
    // slides[currentSlide].classList.remove('slide');
    // slides[n].classList.add('slide');
    const slides = document.querySelectorAll(".slide");
    const activeSlide = document.querySelector('.active-slide');
    
    if (activeSlide) {
        activeSlide.classList.remove('active-slide');
    }
    slides[n].classList.add('active-slide');
    currentSlide = n;
    // debugger
    if(currentSlide === 0){
        startButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
        planetButton.style.display = 'none';
    } else if (currentSlide === slides.length-1) {
        startButton.style.display = 'none';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
        planetButton.style.display = 'none';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
      startButton.style.display = 'none';
      planetButton.style.display = 'none';
    }

    // display next planet and remove other buttons
    submitButton.addEventListener("click", () => {
        slides[0].classList.add('active-slide');
        slides[1].classList.add('active-slide');
        slides[2].classList.add('active-slide');
        planetButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
        startButton.style.display = 'none';
    })

}


function showNextSlide() {
    if (currentSlide === 4) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide(currentSlide);
}


buildQuiz();

// creating pagination
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
// slides[currentSlide].classList.add('active-slide')

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
startButton.addEventListener("click", showNextSlide);
nextButton.addEventListener("click", showNextSlide);
