
 
var button = document.getElementById('button');
var circle = document.getElementById('circle');
var text = document.getElementById('text');
// var mode = document.getElementById('mode');
var clicks=0;

button.addEventListener('click', function(){
  clicks+=1;
  if(clicks%2 != 0)//toggle button is clicked odd times
   {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    circle.style.marginLeft= "78%";
     text.innerHTML = "Switch to Light Mode";
   } 
   else if (clicks%2 == 0)//toggle button is clicked even times
   {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    circle.style.marginLeft= 0;
     text.innerHTML = "Switch to Dark Mode";
   } 
})