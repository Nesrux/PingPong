const lineWidth = 15;
const gapX = 10;
const canvasE1 = document.querySelector('canvas'),
    canvasCtx = canvasE1.getContext('2d')

function setup() {
    canvasE1.width = canvasCtx.width = window.innerWidth;
    canvasE1.height = canvasCtx.height = window.innerHeight;
}


function draw() {
    //campo

    canvasCtx.fillStyle = "#286047";
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //linha do centro
    canvasCtx.fillStyle = "#ffffff"
    canvasCtx.fillRect(
        (window.innerWidth /2) - (lineWidth /2),
        0,
        lineWidth,
        window.innerHeight
    )


    //Desenho das Raquetes esquerda
    canvasCtx.fillStyle = 'ffffff';
    canvasCtx.fillRect(gapX, 240, lineWidth, 200)

    //Desenho Da raquete Diteita
    canvasCtx.fillStyle = 'ffffff';
    canvasCtx.fillRect(
        window.innerWidth - lineWidth - gapX,
        200,
        lineWidth,
        200
    )

}

setup();
draw();