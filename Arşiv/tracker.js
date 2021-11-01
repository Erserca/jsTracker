

function fareKaydet(){
	let sayac = 0;
	document.getElementById("body").addEventListener("click", function(){
	var x = event.clientX;
	var y = event.clientY;


	var coor = "X pozisyonu: " + x + ", Y pozisyonu: " + y;
	//document.getElementById("yaz").innerHTML = coor;
	sayac++;
});

}




function showUser(str){

if (str=="")
  {
  document.getElementById("txtHint").innerHTML="";
  return;
}
if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
  	xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","getuser.php?q="+str,true);
xmlhttp.send();
}
