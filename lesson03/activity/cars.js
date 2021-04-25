// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

function Car(color, make, model, year) {
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car('Black', 'Chevy', 'Cruze Hatch', 2018);
console.log(myCar);
