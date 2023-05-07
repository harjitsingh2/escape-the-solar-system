class Planet {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        // this.name = name;
    }  
    
    // add image to canvas
    make_base(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Mercury", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/mercury.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
    }
    // draw circle onto canvas
    draw(ctx) {
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
    }
}
   


// const planet = document.getElementById("myplanet"); // we are grabbing the canvas element here
// planet.width = 400;
// planet.height = 600;

// this allows us to draw stuff on it
// const ctx = planet.getContext("2d");



export default Planet;