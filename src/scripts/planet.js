class Planet {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        // this.score = 0;
        // this.name = name;
    }  
    
    // add Mercury to canvas
    makeMercury(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Mercury", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/mercury-color-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -50, 150, 500, 500 * base_image.height / base_image.width);
        }
        console.log("Mercury created");
    }
    // add Venus to canvas
    makeVenus(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Venus", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/venus-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 150, 380, 380 * base_image.height / base_image.width);
        }
        console.log("Venus created");
    }

    makeEarth(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Earth", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/earth-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, 0, 150, 400, 400 * base_image.height / base_image.width);
        }
        console.log("Earth created");
    }
    
    makeMars(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Mars", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/mars-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -100, 140, 600, 600 * base_image.height / base_image.width);
        }
        console.log("Mars created");
    }

    makeJupiter(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Jupiter", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/jupiter-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -50, 150, 500, 500 * base_image.height / base_image.width);
        }
        console.log("Jupiter created");
    }

    makeSaturn(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Saturn", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/saturn-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -50, 150, 500, 500 * base_image.height / base_image.width);
        }
        console.log("Saturn created");
    }

    makeUranus(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Uranus", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/uranus-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -50, 150, 500, 500 * base_image.height / base_image.width);
        }
        console.log("Uranus created");
    }

    makeNeptune(ctx) {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "white";
        ctx.fillText("Neptune", 110, 140);
        let base_image = new Image();
        base_image.src = './src/images/neptune-transparent.png';
        base_image.onload = function() {
            ctx.drawImage(base_image, -50, 150, 500, 500 * base_image.height / base_image.width);
        }
        console.log("Neptune created");
    }



    // draw circle onto canvas
    draw(ctx) {
        ctx.font = "bold 50px monospace";
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