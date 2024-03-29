import Planet from './planet.js';

let venus = new Planet;

function makePlanet() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    venus.makeVenus(ctx);
}
makePlanet();

// console.log("Welcome to Venus");

// array of questions and answer objects
let questions = [
  {
    question: "Venus, aka 'Earth's twin', has a size and structure similar to Earth. But it has a dense and toxic atmosphere filled with carbon dioxide and sulfuric acid which has led to extreme surface heat. Venus rotates very slowly. One day on Venus is 243 Earth days and one year is 225 Earth days. Meaning that a Venusian day is longer than a year! Additionally, Venus rotates in the opposite direction of most planets. It is quite the oddball."
  },  
  {
        question: "Venus is the hottest planet in our solar system",
        answers: {
            a: "true",
            b: "false"
        },
        correctAnswer: 'a'
    },
    {
        question: "Approximately how long is one day on Venus?",
        answers: {
            a: "1 Earth day",
            b: "100 Earth days",
            c: "200 Earth days"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of these can be found in Venus' atmosphere?",
        answers: {
            a: "oxygen",
            b: "ozone",
            c: "sulfuric acid"
        },
        correctAnswer: 'c'
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
        const possibleAnswers = [];
  
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
        // output.push(
        //   `<div class="slide">
        //     <div class="question"> ${currentQuestion.question} </div>
        //     <div class="answers"> ${answers.join('')} </div>
        //   </div>`
        // );
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
    // let score = 0
  
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
    score = score - 1;
    
    resultsContainer.style.opacity = 10;
    resultsContainer.innerHTML = `Your score: ${score} / 6`;

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
