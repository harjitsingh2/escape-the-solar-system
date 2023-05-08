const infoObject = require("../../information.json");

class Question {
    constructor() {
        this.htmlElement = htmlElement
        this.htmlElement.innerHTML = "<h1>Questions</h1>"
    }  
    
}
const questions = document.getElementById("myquestions"); 

// this allows us to draw stuff on it
const ctx = questions.getContext("2d");

ctx.font = "bold 50px serif";
ctx.fillText("Questions", 150, 50);

// let mercuryQuestion = (infoObject)[0].questions[0];
// ctx.font = "20px serif"
// ctx.fillText(mercuryQuestion, 0, 200);

let mercuryQuestions = infoObject[0].questions;
let mercuryChoices = infoObject[0].choices

function displayQuiz() {
    let offsetY = 100;

    for( let i = 0; i < mercuryChoices.length; i++) {
        mercuryQuestions[i].forEach((question) => {
            ctx.font = "12px serif";
            ctx.fillText(question, 50, offsetY);
            offsetY += 30;

        mercuryChoices[i].forEach(choice => {
            ctx.font = "12px serif";
            ctx.fillText(choice.text, 70, offsetY);
            offsetY += 20;
        })
        offsetY += 20;

        })
    }
    console.log("questions loaded");
}


displayQuiz();
    




export default Question;