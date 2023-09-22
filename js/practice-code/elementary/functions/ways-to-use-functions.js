//ways to use a function

//option 1 (function outside the structure)
function functionfruits2(fruit) {
  console.log(fruit);
  return fruit;
}

const fruits1 = ["apple1", "banana1", "orange1"];
fruits1.forEach(functionfruits2);


//option 2 (anonymous function)
const fruits2 = ["apple2", "banana2", "orange2"];
fruits2.forEach(function (fruit) {
  console.log(fruit);
  return fruit;
});


//option 3 (arrow function)
const fruits3 = ["apple3", "banana3", "orange3"];
fruits3.forEach((fruit) => console.log(fruit));


//option with arrow function and addEventListener
const selectButtons = document.querySelectorAll(".drum");
selectButtons.forEach((buttonElement) => buttonElement.addEventListener("click", (handleClick) => alert("I Got Clicked!")));
