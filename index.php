<!DOCTYPE html>
<html>
<head>
<?php
echo "<title>ESC| Erdoğan</title>";
?>
<link rel="stylesheet" href="style.css">
</head>

<body>
<div id="editor-section">
     <div class="editable" id="editor">

       Bir şeyler bir şeyler

     </div>
</div>
<button name = btn1 id="btn" onclick="tikla()"> Tıklayınız </button>
<button name = btn2 id="btn2" onclick="tikla2()"> Tıklayınız 2 </button>
<script type="text/javascript" src="canvas.js"></script>
</body>

<script>
/*function tikla(){

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

        x = Math.random() * window.innerWidth;
        y =  Math.random() * window.innerHeight;
        ctx.lineTo(x,y);
        ctx.strokeStyle  = "#FF0000";
        ctx.stroke();
    }
}
*/
</script>
</html>
