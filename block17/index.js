const coffeeData = require("./coffee_data");

//prints all the coffee drinks in coffeeData
console.log(coffeeData);

//prints an array of all drinks five dollars and below
const fiveAndBelow = (coffee) => coffee.price <= 5;
console.log(coffeeData.filter(fiveAndBelow));

//Calculate total if you order one of every drink
const priceIsEven = (coffee) => coffee.price % 2 === 0;
console.log(coffeeData.filter(priceIsEven));

//print the total if you were to order one of every drink
//first need an array of only the prices of the coffee
const getPrice = (coffee) => coffee.price;
const price = coffeeData.map(getPrice);

const totalAllDrinks = (accumulator, currentVal) => accumulator + currentVal;
console.log(
  "the total cost of one of every drink is: " + price.reduce(totalAllDrinks)
);

//print all the drinks that are seasonal and add "with imported beans" at the end of the name
const isSeasonal = (coffee) => {
  if (coffee.seasonal === true) {
    return (coffee.name += " with imported beans");
  }
};
console.log(coffeeData.filter(isSeasonal));
