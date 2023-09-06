var numberOfBottles = 99;
var count = 0;

while (numberOfBottles > 0) {
  var bottleWord = "bottles";

  count++;

  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  console.log(
    numberOfBottles +
      " " +
      bottleWord +
      " of beer on the wall. " +
      numberOfBottles +
      " " +
      bottleWord +
      " of beer."
  );
  numberOfBottles--;
  console.log(
    "Take one down, pass it around, " +
      numberOfBottles +
      " " +
      bottleWord +
      " of beer on the wall."
  );
  console.log();
  if (numberOfBottles === 0) {
    bottleWord = "bottles";
    console.log(
      "No more " +
        bottleWord +
        " of beer on the wall, no more " +
        bottleWord +
        " of beer."
    );
    console.log(
      "Go to the store and buy some more, " +
        count +
        " " +
        bottleWord +
        " of beer for the wall."
    );
  }
}
