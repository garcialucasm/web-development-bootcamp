//Create var for input and script.

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;

//select only what is within 140 characters.

var tweetSubmited = tweet.slice(0, 141);


//check if it is above or below 140 characters.

if (tweetCount <= 140) {
  alert(
    "You have written " +
      tweetCount +
      " characters, you have " +
      (140 - tweetCount) +
      " characters remaining."
  );
  alert("This is the message that will be sent: \n\n" + tweetSubmited);
} else if (tweetCount > 140) {
  alert(
    "You have written " +
      tweetCount +
      " characters, you exceeded the limit by " +
      (140 - tweetCount) +
      " characters."
  );
  alert("This is the message that will be sent: \n\n" + tweetSubmited);
} else {
  alert("Error: Try again later.");
}
