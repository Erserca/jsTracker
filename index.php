<!DOCTYPE html>
<html>
<head>
</head>

<body >
<canvas id="myCanvas"  style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>


<script>
const canvas = document.getElementById('myCanvas');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

  window.addEventListener('resize', resizeCanvas, false);


  resizeCanvas();

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  var x = 0;
  var y = 0;
  ctx.moveTo(x, y);

    for(let i = 1; i<100;i++){

        x = Math.random() * 1000;
        y =  Math.random() * 1000;
        ctx.lineTo(x,y);
        ctx.strokeStyle  = "#FF0000";
        ctx.stroke();
    }


</script>
</body>
</html>
