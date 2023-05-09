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

// create our game quiz
function buildQuiz(){
    // store the HTML output
    const output = [];
  
    questions.forEach(
      (currentQuestion, questionNumber) => {
        // store the list of possible answers
        const answers = [];
  
        // add radio button for each possible answer and add to array 
        for(letter in currentQuestion.answers){
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
    let score = -1;
  
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
    showAnswers.opacity = 10;
    resultsContainer.innerHTML = `Yours score: ${score} / ${(questions.length-1)}`;
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
    } else if (currentSlide === slides.length-1) {
        startButton.style.display = 'none';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
      startButton.style.display = 'none';
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
