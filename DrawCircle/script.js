
var canvas = document.getElementById("canvas-area");
canvas.addEventListener('mouseup',draw);

function draw(e){
    var canvas = document.getElementById("canvas-area");
    var context = canvas.getContext("2d");
    var clientRect = canvas.getBoundingClientRect();
    var posX= e.clientX - clientRect.left;
    var posY = e.clientY - clientRect.top;
    console.log(posX, posY);

    context.fillStyle = generateRamdomColors (); //"#000000";
    console.log(context.fillStyle);
    context.beginPath();
    var maxRadius = 50;
    var radius = maxRadius * Math.random();
    context.arc(posX,posY, radius,0, 2*Math.PI);
    context.fill();

 }

 //Thanks to follow link: 
 //https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
 function generateRamdomColors(){
    let maxVal = 0xFFFFFF;
    let rNumber = Math.random() * maxVal;
    //converting floating number to integer. 
    console.log(`Random number generated:${rNumber}`);
    rNumber = Math.floor(rNumber);
    console.log(`Random number after floor:${rNumber}`);
    rNumber = rNumber.toString(16);
    console.log(`Random number after tostring:${rNumber}`);
    //to add filler values so that it is alway 6 letters. 
    let rColor = rNumber.padStart(6,0);
    return `#${rColor.toUpperCase()}`;

 }