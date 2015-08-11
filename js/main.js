// add scripts
 function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owners = [];
  this.current_owner = [];
  this.passengers = [];
}

var porscheCarrera15 = new Car("Porsche", "Carrera", "2015", "red");
var toyotaPrius14 = new Car("Toyota", "Prius", "2014", "blue");
var toyotaFJ12 = new Car("Toyota", "FJ Cruiser", "2012", "green");

Car.prototype.driveTo = function (destination) {
  if (this.state === "on")
  console.log("Driving to " +destination);
  else
  console.log("Sorry, this car is off.");
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = "on";
};

Car.prototype.off = function(){
  this.state = "off";
};

Car.prototype.park = function() {
  if (this.state === "off")
  console.log("Parked!");
  else
  console.log("Sorry, the car is still on.");
};

Car.prototype.sale = function(owner, newOwner) {
  this.previous_owners.push(owner);
  this.current_owner.push(newOwner);
};

Car.prototype.pickUp = function (name) {
  if (this.state === "on") {
    this.passengers.push(name);
    console.log("Driving to pickup " +name);
  } else
    console.log("Car is off.");
};

Car.prototype.dropOff = function (name) {
  var index = this.passengers.indexOf(name);
  if (this.state === "off")
   return "Car is off.";
  if (index != -1)
    this.passengers.splice(index, 1);
    else
    console.log("Not a passenger.");
};
