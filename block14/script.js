/* Only Odds

The following code takes an array of numbers and returns an array with only the odd numbers

PSEUDOCODE:
declare array
print function onlyOdds with array as an argument output
onlyOdds function
    declare odd numbers array
    for loop search array
        if value at index is odd
            push value
    return odd numbers array
*/

const num1 = [2, 4, 6, 8, 11, 20, 15, 22];
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num3 = [70, 42, 55, 81, 21, 91, 34];
const num4 = [2, 4, 6, 8, 10, 11, 12];

console.log(onlyOdds(num1));
console.log(onlyOdds(num2));
console.log(onlyOdds(num3));
console.log(onlyOdds(num4));

//takes an array of numbers, returns a new array of only the odd numbers
function onlyOdds(array) {
  const odds = [];
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] % 2 === 0)) {
      odds.push(array[i]);
    }
  }
  return odds;
}

console.log("------------------------------------------");

/* Vowel versus Constant

The following code takes a string, prints it as well as the number of vowels and number of constants it has

PSEUDOCODE:
declare String
global var array of vowels
print string and consonantCounter(String) and vowelCounter(String)
function consonantCounter(String)
    declare counter
    for loop String length
        if character at index is not found in array of vowels
            increment counter
    return counter
function vowelCounter(String)
    declare counter
    for loop String length
        if character at index is found in array of vowels
            increment counter
    return counter    
*/

//ENDED UP THINKING OF A DIFFERENT WAY TO CODE IT WHEN COMPARED TO THE PSEUDOCODE, STARTED MESSING AROUND A BIT
const input = ["hello", "ukulele", "awesome", "onomonopia", "textbook"];
var vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < input.length; i++) {
  console.log(
    input[i] +
      " has " +
      vowelCounter(input[i])[0] +
      " consonants and " +
      vowelCounter(input[i])[1] +
      " vowels"
  );
}

//takes a string input, returns an array of two values, one for counting consonants and the other counts vowels
function vowelCounter(input) {
  //value at index 0 represents consonant count, value at index 1 represents vowel count
  let counter = [0, 0];
  for (let i = 0; i < input.length; i++) {
    //determines if the character matched with a vowel
    let match = false;
    for (let j = 0; j < vowels.length; j++) {
      if (input.charAt(i) === vowels[j]) {
        counter[1]++;
        match = true;
      }
      //stops checking array of vowels if one matches
      if (match) {
        break;
      }
    }
    //if no vowel match was found, incremements consonant value
    if (!match) {
      counter[0]++;
    }
  }
  return counter;
}

console.log("------------------------------------------");

/* Reverse Array

Create a new array that is in reverse of the original array

PSEUDOCODE:
declare array
print reverse function output
function reverseArray
    declare empty reversed array
    for loop array parameter length descending from last index
        push value into reversed array
    return reversed array
*/

const array1 = [1, 2, 3];
const array2 = [1, 3, 5, 7, 9, 11];
const array3 = [20, 50, 30, 60, 200];
const array4 = [1, -1, 2, -3, 5, -8, 13];

console.log(reverseArray(array1));
console.log(reverseArray(array2));
console.log(reverseArray(array3));
console.log(reverseArray(array4));

function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

console.log("------------------------------------------");

/* FIZZBUZZ

going from 1-100 print fizz for values that are multiples of 3, buzz for values that are multiples of 2, and fizzbuzz if the value is both

PSEUDOCODE:
for loop 100 times
    if i % 3 is 0 and i % 5 is 0
        print fizbuzz
    else if i % 3 is 0 
        print fizz
    else if i % 5 is 0
        print buzz
     else
         print i
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}
