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
ctx.fillText("Questions", 150, 50);

// navigation
const nav = document.getElementById("mynav"); 
const navctx = nav.getContext("2d");


let mercuryQuestions = infoObject[0].questions;
let mercuryChoices = infoObject[0].choices

function displayQuiz() {
    let offsetY = 100;

    for (let i = 0; i < mercuryChoices.length; i++) {
        mercuryQuestions[i].forEach((question) => {
            ctx.font = "12px serif";
            ctx.fillText(question, 50, offsetY);
            offsetY += 30;

        mercuryChoices[i].forEach(choice => {
            ctx.font = "12px serif";
            ctx.fillText(choice.text, 70, offsetY);
            offsetY += 20;
            // choice.addEventListener("click", e => {
            //     console.log(`${choice} selected`);
            // })


        })
        offsetY += 20;

        })
    }
    console.log("questions loaded");
}



function submitQuiz(event) {
    event.preventDefault();

    let lives = 3;

    for (let i = 0; i < mercuryChoices.length; i++) {
    mercuryQuestions[i].forEach((question, index) => {
        const selectedAnswer = quizForm.elements[`q${index}`].value;

        // if (selectedAnswer !== question.choices.find(choice => choice.correct).text) {
        //     lives--;
        // }
        if (selectedAnswer !== mercuryChoices.find(correct => correct === true).text) {
            lives--;
        }
    })
    }

    navctx.font = "16px serif";
    navctx.fillText("Lives Remaining:"); 
    // navctx.fillText(`Lives Remaining: ${lives}`, 50, 50); 
    
}

quizForm.addEventListener("submit", submitQuiz);
window.addEventListener("load", displayQuiz);

    



export default Question;