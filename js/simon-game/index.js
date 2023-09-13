var buttonColors = ["red", "blue", "green", "yellow"];
var randomSequence = [];
var clickedSequence = [];
var started = false;

//Start the game on any key press and switch "started" to "true" to not allow key press start again until the game ends
$(document).on("keypress", function () {
  if (!started) {
    started = true;
    nextSequence();
  }
});

// Generate the randomSequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * buttonColors.length);
  randomSequence.push(buttonColors[randomNumber]);
  var currentColor = randomSequence[randomSequence.length - 1];
  nextLevel();
  setTimeout(function () {
    $("#" + currentColor).addClass("pressed lighted");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed lighted");
    }, 400);
    playSound(currentColor);
  }, 1000);
}

//Change the level in title using the length of randomSequence and animate background
function nextLevel() {
  $(".level-title").html("Level " + randomSequence.length);
  animationNextLevel();
}

//Event when any button is clicked to add the color in clickedSequence and animate the button
$(".btn").on("click", function (event) {
  if (started === true) {
    clickedSequence.push(event.target.id);
    var lastIndex = clickedSequence.length - 1; // Get the last index
    animateButton(clickedSequence[lastIndex]);
    checkAnswer(clickedSequence.length - 1);
  }
});

//Check the answer by comparing last clickedSequence with the randomNumber array on each click
function checkAnswer(indexLevel) {
  if (randomSequence[indexLevel] === clickedSequence[indexLevel]) {
    if (clickedSequence.length === randomSequence.length) {
      clickedSequence = [];
      setTimeout(function () {
        nextSequence();
      }, 1000);
    } else {
    }
  } else {
    gameOver();
  }
}

//Allows to restart the game by pressing any key and resets the arrays
function gameOver() {
  randomSequence = [];
  clickedSequence = [];
  indexLevel = 0;
  animateGameOver();
  started = false;
}

// Animate Pressed Button: Add the "pressed" class to the selected button for animation and Play Sound
function animateButton(idButton) {
  $("#" + idButton).addClass("pressed lighted");
  setTimeout(function () {
    $("#" + idButton).removeClass("pressed lighted");
  }, 200);
  playSound(idButton);
}

//Animation when reaching the next level
function animationNextLevel() {
  $(".level-title").addClass("next-level-title");
  setTimeout(function () {
    $(".level-title").removeClass("next-level-title");
  }, 100);
  $("body").addClass("next-level");
  setTimeout(function () {
    $("body").removeClass("next-level");
  }, 100);
}

//Animate Game Over: Add the "game-over" class to the body tag for animation, Play Sound and change the title
function animateGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 500);
  $(".level-title").html("Game-Over, Press Any Key to Restart");
  playSound("wrong");
}

//Define playColorSound function to play different sounds based on the provided parameter.
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}
