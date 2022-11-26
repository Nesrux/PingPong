const lineWidth = 15;

const canvasE1 = document.querySelector('canvas'),
     canvasCtx= canvasE1.getContext('2d')

function setup(){
    canvasE1.width = canvasCtx.width =  window.innerWidth;
    canvasE1.height = canvasCtx.height =  window.innerHeight;
}


function draw(){
//campo
 canvasCtx.fillStyle = "#286047";
canvasCtx.fillRect(0,0, window.innerWidth, window.innerHeight);
//linha
canvasCtx.fillStyle = "#ffffff";
canvasCtx.fillRect(window.innerHeight /2 - lineWidth / 2,
 0,
lineWidth,
 window.innerHeight);
}

setup();
draw();