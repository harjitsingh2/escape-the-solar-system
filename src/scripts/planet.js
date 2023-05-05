class Planet {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        // this.htmlElement = htmlElement
        // this.htmlElement.innerHTML = "<h1>Planet Name</h1>"
        // this.name = name;
    } 
    // draw(context) {
    //     ctx.beginPath();
    //     ctx.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI, true)
    //     ctx.fillStyle = this.color; // creates the inside fill. inside the outline
    //     ctx.fill();
    // }
// let planet = document.getElementById("myplanet");
// let planetContext = planet.getContext("2d");  
    
}
// const planet = document.getElementById("myplanet");
// const ctx = planet.getContext("2d");
// const mercury = new Planet(200, 250, 100, "brown");
// mercury.draw(ctx);

 // the code below goes in this? add a script tag?
// const planet = document.getElementById("myplanet");
// const planetContext = planet.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);      

document.addEventListener("DOMContentLoaded", // this makes sure that all our html is loaded before the javascript file runs
 ()=> {
    const planet = document.getElementById("myplanet"); // we are grabbing the canvas element here
    planet.width = 400;
    planet.height = 600;
    
    // this allows us to draw stuff on it
    const ctx = planet.getContext("2d");
    
    ctx.font = "bold 50px serif";
    ctx.fillText("Planet 1", 150, 50);
    // create a circle
    ctx.beginPath();
    ctx.arc(200, 250, 100, 0, 2 * Math.PI, true)
    ctx.strokeStyle = "black";  // creates an outline
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.fillStyle = "brown"; // creates the inside fill. inside the outline
    ctx.fill();

})

// export default Planet;