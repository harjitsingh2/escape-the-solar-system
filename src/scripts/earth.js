import Planet from './planet.js';


let mercury = new Planet;

function makePlanet() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    mercury.makeEarth(ctx);
}
makePlanet();

console.log("Welcome to Earth");

// array of questions and answer objects
let questions = [
  {
    question: "Earth, the planet that we all know and love, is the third planet from the Sun. Although Earth is a rocky planet filled with mountains and canyons, most of its surface is covered with water. Earth's atmosphere is 78% nitrogen and 21% oxygen. Not only does Earth's atmosphere give us the ability to breathe, but it also protects us from meteoroids."
  },  
  {
        question: "How long does it take Earth to rotate around its axis?",
        answers: {
            a: "24 hours",
            b: "365 days"
        },
        correctAnswer: 'a'
    },
    {
        question: "What covers a majority of Earth's surface?",
        answers: {
            a: "land",
            b: "plants",
            c: "water"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is Earth's atmosphere primarily composed of?",
        answers: {
            a: "nitrogen",
            b: "oxygen",
            c: "ozone"
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
    const output = [];
  
    questions.forEach(
      (currentQuestion, questionNumber) => {
        // store the list of possible answers
        const answers = [];
  
        // add radio button for each possible answer and add to array 
        for(let letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter})
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output array
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
        );
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
    let showAnswers = quizContainer.querySelector('.slide');
    
    // how can I set the opacity to 10 after we show results?
    showAnswers.style.opacity = 0;
    resultsContainer.style.opacity = 10;
    resultsContainer.innerHTML = `Yours score: ${score} / 9`;

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
      planetButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
    startButton.style.display = 'none';
    planetButton.style.display = 'none';
  }
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
