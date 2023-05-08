const infoObject = require("../../information.json")

class Information {
    constructor() {
        this.htmlElement = htmlElement
        this.htmlElement.innerHTML = "<h1>Information</h1>"
    }  
    
}
const info = document.getElementById("myinfo"); 
const ctx = info.getContext("2d");

ctx.font = "bold 50px serif";
ctx.fillText("Information", 50, 50);
let mercuryInfo = (infoObject)[0].information
ctx.font = "20px serif"
// ctx.fillText(mercuryInfo, 0, 100);
wrapText(ctx, mercuryInfo, 20, 100, 350, 20);

console.log("Information loaded")

//console.log((infoObject)[0].information)

// function to wrap text around a canvas element
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
    }
    else {
        line = testLine;
    }
    }
    context.fillText(line, x, y);
}

export default Information;