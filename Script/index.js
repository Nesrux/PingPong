const canvasE1 = document.querySelector('canvas'),
    canvasCtx = canvasE1.getContext('2d')
const lineWidth = 15;
const gapX = 10;

const mouse = {x: 0, y: 0}
const field = {
    w: window.innerWidth,
    h: window.innerHeight,

    draw: function () {
        //Desenho do campo
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, this.w, this.h);
    },
}

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        //linha do centro
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillRect((field.w / 2) - (this.w / 2), 0, this.w, this.h)
    }

}

const leftPaddle = {
    x: gapX,
    y: field.h / 2,
    w: line.w,
    h: 200,
    _move: function () {
      this.y = mouse.y
    },
    draw: function () {
      // desenho da raquete esquerda
      canvasCtx.fillStyle = "#ffffff"
      canvasCtx.fillRect(this.x, this.y, this.w, this.h)

      this._move()
    }
}

const righPaddle = {
   x: field.w - line.w - gapX,
   y: field.h / 2,
   w: line.w,
   h:200,
   _move: function(){
    this.y = ball.y
   },
   draw: function (){
    canvasCtx.fillStyle = 'ffffff';
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    this._move();
   }
}

const ball = {
    x: field.w / 2,
    y: field.h /2,
    r: 20,
    speed: 5,
    _calcPosition(){

    },
    _move: function(){
        this.x += this.speed,
        this.y += this.speed
    },
    draw: function () {
        canvasCtx.fillStyle = 'ffffff';
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        canvasCtx.fill();

        this._move();
    }

}

function setup() {
    canvasE1.width = canvasCtx.width = window.innerWidth;
    canvasE1.height = canvasCtx.height = window.innerHeight;
}


function draw() {
    field.draw();
    line.draw();
    leftPaddle.draw();
    righPaddle.draw();
    ball.draw();

    // Desenho da bola
}

window.animateFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  })()

  function main() {
    animateFrame(main)
    draw()
  }

  setup()
  main()

  canvasE1.addEventListener("mousemove", function (e) {
    mouse.x = e.pageX
    mouse.y = e.pageY
  })
