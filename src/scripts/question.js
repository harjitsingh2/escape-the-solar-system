const infoObject = require("../../information.json");

class Question {
    constructor() {
        this.htmlElement = htmlElement
        this.htmlElement.innerHTML = "<h1>Questions</h1>"
    }  
    
}
const quizForm = document.getElementById("quiz-form")
const questions = document.getElementById("myquestions"); 

const ctx = questions.getContext("2d");
// header
ctx.font = "bold 50px serif";
ctx.fillText("Questions", 90, 50);

// navigation
const nav = document.getElementById("mynav"); 
const navctx = nav.getContext("2d");

// retrieve info from json file
let mercuryQuestions = infoObject[0].questions;
let mercuryChoices = infoObject[0].choices

// display quiz form
function displayQuiz() {
    let offsetY = 100;

    for (let i = 0; i < mercuryChoices.length; i++) {
        mercuryQuestions[i].forEach((question) => {
            ctx.font = "bold 14px serif";
            ctx.fillText(question, 30, offsetY);
            offsetY += 30;

        mercuryChoices[i].forEach(choice => {
            ctx.font = "14px serif";
            ctx.fillText(choice.text, 70, offsetY);
            offsetY += 20;
            // choice.addEventListener("click", () => {
            //     console.log(`${choice} selected`);
            // })


        })
        offsetY += 20;

        })
    }
    console.log("questions loaded");
}


// submit quiz
function submitQuiz(event) {
    event.preventDefault();

    let lives = 3;

    for (let i = 0; i < mercuryChoices.length; i++) {
    mercuryQuestions[i].forEach((question, index) => {
        const selectedAnswer = quizForm.elements[`q${index}`].value;

        if (selectedAnswer !== mercuryChoices.find(correct => correct === true).text) {
            lives--;
        }
    })
    }

    navctx.font = "16px serif";
    navctx.fillText(`Lives Remaining: ${lives}`, 50, 50); 
    
}

quizForm.addEventListener("submit", submitQuiz);
window.addEventListener("load", displayQuiz);

    



export default Question;