var ball = document.getElementById('ball');
var gameArea = document.getElementById('app');

var ballWidth = parseInt(getComputedStyle(ball).width);
var contWidth = parseInt(getComputedStyle(gameArea).width);
var contHeight = parseInt(getComputedStyle(gameArea).height);

var maxWidth = contWidth - ballWidth;
var maxHeight = contHeight - ballWidth;

function initialiseBall() {
  ball.style.top = Math.floor(Math.random() * maxHeight) + 'px';
  ball.style.left = Math.floor(Math.random() * maxWidth) + 'px';
}

initialiseBall();

window.addEventListener('keypress', function(event) {
  let val = event.key;
  let top = parseInt(getComputedStyle(ball).top); // Get the top value from CSS
  let left = parseInt(getComputedStyle(ball).left); // Get the left value from CSS

  // Handling events on pressing W or w 
  if(val == 'W' || val == 'w') {
        top -= 10;
        // checking if the ball reaches border after pressing the KEY 
        if(top <= 0){
            ball.style.top = 0 + 'px';
            return;
        }
        ball.style.top = top + 'px';              
    }

    // Handling events on keys S & s 
    else if(val == 'S' || val == 's') {
        top += 10;
        if(top >= maxHeight){
            ball.style.top = maxHeight + 'px';
            return;
        }
        ball.style.top = top + 'px';
    }

    // Handling events on A & a 
    else if(val == 'A' || val == 'a') {
        left -= 10;
        if(left <= 0){
            ball.style.left = 0 + 'px';
            return;
        }
        ball.style.left = left + 'px';
    }

    // Handling events on D & d 
    else if(val == 'D' || val == 'd') {
        left += 10;
        if(left >= maxWidth){
            ball.style.left = maxWidth + 'px';
            return;
        }
        ball.style.left = left + 'px';
    }
});









// //import "./styles.css";
// var ball =  document.getElementById('ball');
// var gameArea = document.getElementById('app');

// // Getting the width of ball ( width and height of ball are same)
// var ballWidth = parseInt(getComputedStyle(ball).width);

// // Width and Height of container in which the ball is restricted
// var contWidth = parseInt(getComputedStyle(gameArea).width);
// var contHeight = parseInt(getComputedStyle(gameArea).width);

// // This is the maximum value of top and left in integers that ball can go 
// var maxWidth = contWidth - ballWidth;
// var maxHeight = contHeight - ballWidth;

// // function initialiseBall() {
// //   ball.style.top = Math.floor(Math.random() * maxHeight) + 'px';
// //   ball.style.left = Math.floor(Math.random() * maxWidth) + 'px';
// // }

// // initialiseBall();

// window.addEventListener('keypress', function (event) {
//   let val = event.key;

//   //controlling the movement using only top and left 
//   let left = parseInt(ball.style.left);
//   let top = parseInt(ball.style.top);
  
//   //for pressing s (moving the ball down)
//   if(val == 115 || val ==115)
//   {
//     top += 6;
//     if(top >= maxHeight){
//         ball.style.top = maxHeight + 'px';
//         return;
//     }
//     ball.style.top = top + 'px';
//   }
// })