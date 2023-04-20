/* Is Truthy

The following code checks a set of values and prints if they are a truthy or falsy value.

PSEUDOCODE:
set array of values
for loop through each array index
    if value is true 
        display true
    if value is not true
        if value is boolean false
            print
        if value is null
            print
        if value is undefined
            print
        if value is number 0 
            print
        if value is empty String
            print
        else
            print error
end
*/
const val = ["I am a string", false, null, undefined, 0, ""];

for (let i = 0; i < val.length; i++) {
  if (val[i]) {
    console.log("true");
  } else {
    if (val[i] === false) {
      console.log("The boolean value is falsy");
    } else if (val[i] === null) {
      console.log("The null value is falsy");
    } else if (val[i] === undefined) {
      console.log("Undefined is falsy");
    } else if (val[i] === 0) {
      console.log("The number 0 is falsy (The only falsy number)");
    } else if (val[i] === "") {
      console.log("The empty string is falsy");
    } else {
      console.log("An error has ocurred");
    }
  }
}
console.log("------------------------------------------");
/* Number Line

The following code checks takes the sum of two values and displays the correct output

PSEUDOCODE:
set array of first set of values
set array of second set of values
for loop through each index of both arrays
    if sum < -1000
        print
    if sum < 0 
        print
    if sum === 0
        print
    if sum > 100
        print
    else
        print
end
*/
let num1 = [50, 99, 0, 500, -1000, -5];
let num2 = [51, -2, 101, -500, 0, 0];

for (let i = 0; i < num1.length; i++) {
  let sum = num1[i] + num2[i];
  if (sum < -1000) {
    console.log(sum + " is less than -1000");
  } else if (sum < 0) {
    console.log(sum + " is a negative number");
  } else if (sum === 0) {
    console.log(sum + " is equal to 0");
  } else if (sum > 100) {
    console.log(sum + " is greater than 100");
  } else {
    console.log(sum + " is greater than 0");
  }
}
console.log("------------------------------------------");
/* Greater Than or Equal to 5

The following code checks that two values are BOTH greater than or equal to 5

PSEUDOCODE:
set array of first set of values
set array of second set of values
for loop through each index of both arrays
    if array1[index] >= 5 AND array2[index] >= 5
        print true
    else
        print false
end
*/
num1 = [5, 10, 0, 1000, 6, 5];
num2 = [6, 11, 0, -1000, 4, 5];

for (let i = 0; i < num1.length; i++) {
  if (num1[i] >= 5 && num2[i] >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}
console.log("------------------------------------------");
/* Pair and Compare

The following code checks that if at least one of two value pairs is truthy

PSEUDOCODE:
set two-dimensional array for list of value pairs
set second two-dimensional array for list of value pairs
for loop through each index(row) of both arrays
    if array1[row][pair1] === array1[row][pair2] OR array2[row][pair1] === array2[row][pair2]
        print true
    else
        print false
end
*/
//first pair of values
let paramA = [
  ["cat", "cat"],
  ["five", 5],
  [0, false],
  ["eight", "eight"],
  [11, "eleven"],
  ["cake", "cake"],
];
//second pair of values
let paramB = [
  [6, "6"],
  ["dog", "dawg"],
  ["horse", "horse"],
  ["ate", "ate"],
  ["four", "for"],
  ["pie", "pie"],
];

for (let i = 0; i < paramB.length; i++) {
  if (paramA[i][0] === paramA[i][1] || paramB[i][0] === paramB[i][1]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
