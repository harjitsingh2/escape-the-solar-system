// array of questions and answer objects
let questions = [
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
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
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
    let lives = 3;
  
    // find answer for each question
    questions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if(userAnswer !== currentQuestion.correctAnswer){
        lives--;
        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `You have ${lives} lives remaining`;
}


buildQuiz();
submitButton.addEventListener('click', showResults);
