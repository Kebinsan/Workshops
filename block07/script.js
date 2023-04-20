//intro message for the user declared as a constant
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

//declaring a value resulting from the addition operator
let x = 5 + 5;

//declaring a value resulting from the multiplication operator
let y = 4 * 10;

//declaring a value resulting from the division operator
let z = 117 / 3;

//concatenates the 3 variables with string dashes to form a combination String
let combo = x + " - " + y + " - " + z;

//Displays message String with the .message html class on the index page
document.querySelector(".message").textContent = message;

//Displays the combination String with the .combo html class on the index page
document.querySelector(".combo").textContent = combo;
