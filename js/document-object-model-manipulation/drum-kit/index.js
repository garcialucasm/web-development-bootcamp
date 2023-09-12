// Select all elements with the class "drum" and store them in selectButtons array.
const selectButtons = document.querySelectorAll(".drum");

// Add a click event listener to each button element in selectButtons.
selectButtons.forEach((buttonElement) => buttonElement.addEventListener("click", handleClick));

// Define the function to handle button clicks.
function handleClick() {
  // Get the inner HTML of the first child element of the clicked button.
  var buttonInnerHTML = this.firstElementChild.innerHTML;

  // Call the makeSound function with the button's inner HTML.
  makeSound(buttonInnerHTML);

  // Call the buttonAnimation function with the button's inner HTML.
  buttonAnimation(buttonInnerHTML);
}

// Add a keydown event listener to the entire document.
document.addEventListener("keydown", function (event) {
  // Call the makeSound function with the key that was pressed.
  makeSound(event.key);

  // Call the buttonAnimation function with the key that was pressed.
  buttonAnimation(event.key);
});

// Define the makeSound function to play different sounds based on the provided buttonInnerHTML.
function makeSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
  }
}

// Define the buttonAnimation function to add and remove a "pressed" class for a short animation effect.
function buttonAnimation(currentKey) {
  // Select the button with a class matching the currentKey.
  var activeButton = document.querySelector("." + currentKey);

  // Add the "pressed" class to the selected button for animation.
  activeButton.classList.add("pressed");

  // Remove the "pressed" class after a 100ms delay for the animation effect.
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
