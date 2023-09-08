
//Player 1 - Random number(1~6)
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

//Player 1 - Selecting dice image
var randomImageSource1 = "./img/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//Player 2 - Random number(1~6)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Player 2 - Selecting dice image
var randomImageSource2 = "./img/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//Statements to win
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
