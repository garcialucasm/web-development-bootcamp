//Number of Random Numbers: Input (the number must be equal or greater than 0).
var numberOfRandomNumbers = prompt("Please, enter the number of random numbers you want: \n (the number must be greater than 0)");

//Minimal Number: Input
var minNumber = prompt("Enter the minimal number:");
minNumber = Math.ceil(minNumber - 1);

//Máximal Number: Input
var maxNumber = prompt("Enter the maximal number:");
maxNumber = Math.floor(maxNumber);

//Loop for each number
for (let i = 1; i <= numberOfRandomNumbers; i++) {
  //Calling the function to generate a random integer.
  var rendomIntegerGenerated = generateRandomInteger();

  //Showing the generated random numbers.
  alert(i + "º Random Integer: " + rendomIntegerGenerated);
}

//Generate the random integer.
//Rounding the number and Turning the maximum inclusive.
function generateRandomInteger(randomInteger) {
  var randomInteger =
    Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) + 1;
  return randomInteger;
}
