function tikla2(){

  alert("Tıklandı");
  console.table(window.degisken);
}

var degisken = [];
function tikla(){

var zindex = 15;
var canvas = document.createElement("canvas");

  function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }

window.addEventListener('resize', resizeCanvas, false);
canvas.className = 'canvases';
canvas.style.border = '2px solid red';
canvas.style.zIndex = zindex;
zindex++;
var parentDiv = document.getElementById("editor-section");
parentDiv.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.beginPath();
var x = 0;
var y = 0;
ctx.moveTo(x, y);

for(let i = 1; i< 50;i++){

        x = Math.random() * window.innerWidth
        y =  Math.random() * window.innerHeight;
        window.degisken.push([x,y]);
        ctx.lineTo(x,y);
        ctx.strokeStyle  = "#FF0000";
        ctx.stroke();
    }
}
