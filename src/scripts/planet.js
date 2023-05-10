class Planet {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        // this.name = name;
    }  
    
    // add Mercury to canvas
    makeMercury(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Mercury", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/mercury2.jpeg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Mercury created");
    }
    // add Venus to canvas
    makeVenus(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Venus", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/venus.jpeg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Venus created");
    }

    makeEarth(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Earth", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/earth.jpeg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Earth created");
    }
    
    makeMars(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Mars", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/mars.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Mars created");
    }

    makeJupiter(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Jupiter", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/jupiter.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Jupiter created");
    }

    makeSaturn(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Saturn", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/saturn.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Saturn created");
    }

    makeUranus(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Uranus", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/uranus.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Uranus created");
    }

    makeNeptune(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Neptune", 150, 50);
        let base_image = new Image();
        base_image.src = './src/images/neptune.jpg';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 100, 400, 400);
        }
        console.log("Neptune created");
    }



    // draw circle onto canvas
    draw(ctx) {
        ctx.font = "bold 50px serif";
        ctx.fillText("Mercury", 100, 50);
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


export default Planet;