// class Question {
//     constructor() {
//         this.htmlElement = htmlElement
//         this.htmlElement.innerHTML = "<h1>Questions</h1>"
//     }  
    
// }

      

document.addEventListener("DOMContentLoaded", 
 ()=> {
    const questions = document.getElementById("myquestions"); 
    
    // this allows us to draw stuff on it
    const ctx = questions.getContext("2d");
    
    ctx.font = "bold 50px serif";
    ctx.fillText("Questions", 150, 50);


})

// export default Question;