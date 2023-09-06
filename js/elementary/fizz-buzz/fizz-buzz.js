var output = [];
var count = 1;

function fizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    console.log(output[i]);
    count++;
  }
}

fizzBuzz();
