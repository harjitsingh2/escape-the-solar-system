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

let mercuryQuestion = (infoObject)[0].questions[0];
ctx.font = "20px serif"
ctx.fillText(mercuryQuestion, 0, 200);

      




export default Question;