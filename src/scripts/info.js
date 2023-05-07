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
ctx.fillText(mercuryInfo, 0, 200);

console.log("Information loaded")

//console.log((infoObject)[0].information)

export default Information;