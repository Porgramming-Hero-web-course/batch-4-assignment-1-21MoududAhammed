// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // method to calculate the car's age based on the current year
  getCarAge(): string {
    const currentYear = new Date().getFullYear();
    return `${
      currentYear - this.year
    } (assuming current year is ${currentYear})`;
  }
}

const car = new Car("Honda", "Civic", 2018);
const age = car.getCarAge();
console.log(age);
