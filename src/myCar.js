// Phase 1: Make the Constructor, add sale & paint methods

function Car (make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = "manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
}

Car.prototype.paint = function(newColor) {
	this.color = newColor;
}

// Phase 2: add start, off, & driveTo methods

Car.prototype.start = function() {
	this.state = "on";
}

Car.prototype.off = function() {
	this.state = "off";
}

Car.prototype.driveTo = function(destination) {
	if(this.state === "on") {
		console.log("driving to " + destination);
	} else {
		console.log("Turn the car on first!");
	}
}

Car.prototype.park = function() {
	if(this.state === "off") {
		console.log("Parked!");
	} else {
		console.log("Turn the car off first!");
	}
}

// var myCar = new Car('Toyota', 'Camry', '2006', 'blue');

// Phase 3: Add passengers to constructor & add methods pickUp & dropOff

Car.prototype.pickUp = function(friendName) {
	this.passengers.push(friendName);
	if (this.state === "on") {
		console.log("Driving to pick up " + friendName)
	} else {
		console.log("Turn the car on first!");
	}
}

Car.prototype.dropOff = function(friendName) {
	var dropped = this.passengers.indexOf(friendName);
	this.passengers.splice(dropped, 1);
	if (this.state === "on") {
		console.log(friendName + "" + " says thanks for the ride!");
	} else {
		console.log("No one is being dropped off");
	}
}

module.exports = Car;

