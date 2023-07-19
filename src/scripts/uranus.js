import Planet from './planet.js';


let uranus = new Planet;

function makePlanet() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    uranus.makeUranus(ctx);
}
makePlanet();


// array of questions and answer objects
let questions = [
    {
        question: "Uranus was discovered in 1781 by William Herschel, making it the first planet to be discovered with a telescope. Uranus is composed primarily of icy water, methane, and ammonia, making it an 'ice giant'. It also shares unique properties with other planets: like Saturn, it has 13 rings, and like Venus, it rotates east to west."
      },  
      {
            question: "There is water on Uranus",
            answers: {
                a: "false",
                b: "true"
            },
            correctAnswer: 'b'
        },
        {
            question: "How many rings does Uranus have?",
            answers: {
                a: "5",
                b: "7",
                c: "13"
            },
            correctAnswer: 'c'
        },
        {
            question: "On Uranus, the Sun rises in the _______ and sets in the ______.",
            answers: {
                a: "east, west",
                b: "west, east",
                c: "north, south"
            },
            correctAnswer: 'b'
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
  
    // keep track of user's lives
    // let score = 0;
  
    // find answer for each question
    questions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer === currentQuestion.correctAnswer){
        score++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    
    // how can I set the opacity to 10 after we show results?
    score--;
    resultsContainer.style.opacity = 10;
    resultsContainer.innerHTML = `Your score: ${score} / 21`;

    submitButton.removeEventListener('click', showResults);
    startButton.removeEventListener("click", showNextSlide);
    nextButton.removeEventListener("click", showNextSlide);
}

// function to create slides of questions
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    // submitButton.style.display = 'inline-block';
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
    showSlide(currentSlide + 1);
}


buildQuiz();

// creating pagination
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
startButton.addEventListener("click", showNextSlide);
nextButton.addEventListener("click", showNextSlide);
