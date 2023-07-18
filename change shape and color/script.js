// import "./styles.css";

var changeColor = document.getElementById('change-color');
var display = document.getElementById('display');

var changeShape = document.getElementById('change-shape');
var shape = document.getElementById('shape');

changeColor.addEventListener('click', function(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  display.style.backgroundColor = bgColor;
});

function square() {
  shape.style.marginTop = '40px';
  shape.style.height = '200px';
  shape.style.borderRadius = 0;
}

function circle() {
  shape.style.marginTop = '40px';
  shape.style.height = '200px';
  shape.style.borderRadius = '50%';
}

function rectangle() {
  shape.style.marginTop = '80px';
  shape.style.borderRadius = 0;
  shape.style.height = '100px';
}


changeShape.addEventListener('click', function(){
  var white = "rgb(255,255,255)";
  changeShape.style.backgroundColor = white	;

  var f_arr = [square, circle, rectangle];
  var i = Math.floor(Math.random() * f_arr.length);
  f_arr[i]();
});