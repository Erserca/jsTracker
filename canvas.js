var degisken = [];


function tikla2(){

  alert("Tıklandı");
  console.table(window.degisken);
}



function fareKaydet(){
	let sayac = 0;
	document.getElementById("body").addEventListener("mouseover", function(){
	var x = event.clientX;
	var y = event.clientY;


	var coor = "X pozisyonu: " + x + ", Y pozisyonu: " + y;
	window.degisken.push([x,y]);
	sayac++;
});

}

const bekle = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function tikla(){

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
ctx.clearRect(0, 0, ctx.width, ctx.height);
ctx.beginPath();
var x = 0;
var y = 0;
ctx.moveTo(x, y);

for(let i = 1; i< 50;i++){

        x = Math.random() * 1000;
        y =  Math.random() * 1000;
        window.degisken.push([x,y]);
        ctx.lineTo(x,y);
        ctx.strokeStyle  = "#FF0000";
        ctx.stroke();
        await bekle(250);
    }

    alert("Bitti");
}
