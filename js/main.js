// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

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

var redCarrera = new Car("Porsche", "Carrera", "2015", "red");
var bluePrius = new Car("Toyota", "Prius", "2014", "blue");
var greenFj = new Car("Toyota", "fjCruiser", "2012", "green");

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
  previous_owners.push(owner);
  current_owner.push(newOwner);
};
