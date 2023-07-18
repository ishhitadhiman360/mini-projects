var square = document.getElementById('square');
var gameArea = document.getElementById('app');

var squareWidth = parseInt(getComputedStyle(square).width);
var squareHeight = parseInt(getComputedStyle(square).height);
var contWidth = parseInt(getComputedStyle(gameArea).width);
var contHeight = parseInt(getComputedStyle(gameArea).height);

var maxWidth = contWidth - squareWidth;
var maxHeight = contHeight - squareHeight;

function initialiseBall() {
  square.style.top = Math.floor(Math.random() * maxHeight) + 'px';
  square.style.left = Math.floor(Math.random() * maxWidth) + 'px';
}

initialiseBall();

square.addEventListener('mouseover', initialiseBall);