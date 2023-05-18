//creates a car object
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return (
      "Make: " + this.make + "\nModel: " + this.model + "\nYear: " + this.year
    );
  }
}

//creates an electric car object which is a subclass of car
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return super.getDescription() + "\nRange: " + this.range;
  }
}

//create a car and display the properties
const car = new ElectricCar("Tesla", "Model S", 2019, 300);
console.log(car.getDescription());
