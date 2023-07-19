import Planet from './planet.js';


let jupiter = new Planet;

function makePlanet() {
    const planet = document.getElementById("myplanet");
    planet.width = 400;
    planet.height = 600;
    const ctx = planet.getContext("2d"); 
    jupiter.makeJupiter(ctx);
}
makePlanet();


// array of questions and answer objects
let questions = [
    {
        question: "The 'gas giant' Jupiter is the largest planet in our solar system. It could fit eleven Earths across its diameter. Jupiter's atmosphere is made primarily of hydrogen and helium. Due to its large mass, Jupiter has a strong gravitational pull. More than 75 moons orbit this giant. One day on Jupiter is equal to 10 hours, while a year is 12 Earth years."
      },  
      {
            question: "How many hours is one day on Jupiter?",
            answers: {
                a: "10 hours",
                b: "24 hours",
                c: "50 hours"
            },
            correctAnswer: 'a'
        },
        {
            question: "What is Jupiter's atmosphere primarily composed of?",
            answers: {
                a: "hydrogen",
                b: "nitrogen",
                c: "oxygen"
            },
            correctAnswer: 'a'
        },
        {
            question: "How many moons does Jupter have?",
            answers: {
                a: "0",
                b: "5",
                c: "75"
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
    resultsContainer.innerHTML = `Your score: ${score} / 15`;

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
