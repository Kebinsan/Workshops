/* DISCOUNT CHAIN

Customer checkout system that returns the total of refills including subscriptions and coupon use.
Rules:
customers with subscriptions receive a 25% discount after the refill total has been calc'd
customers with a coupon receive a $10 discount AFTER subscription discount has been calculated
at the end return the log "Your grand total is ${finalAmount}"

Pseudocode:
define timmy
define sara
define rocky
function checkout
    define total equals price per refill times refills
    if person has subscription
        set total to subscription function output
    if person has coupon
        set total to coupon function output
    return total
function subscription
    modify total 25% off
function coupon
    modify total with a $10 discount
call checkout function with people as arguments
END
*/

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

//applies 25% discount to a number value
const applySubscription = (x) => x - x * 0.25;

//subtracts 10 from a number
const addCoupon = (x) => x - 10;

//calculates a persons grand total
function checkout(person) {
  let total = person.pricePerRefill * person.refills;
  if (person.subscription) {
    total = applySubscription(total);
  }
  if (person.coupon) {
    total = addCoupon(total);
  }
  return total;
}

console.log("Timmy, your grand total is " + checkout(timmy));
console.log("Sarah, your grand total is " + checkout(sarah));
console.log("Rocky, your grand total is " + checkout(rocky));
