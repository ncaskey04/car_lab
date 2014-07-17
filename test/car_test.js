// pulling the term 'expect' from chai to use in test
// importing the constructor 'Car' to test in car_test.js
// methods change object properties

var expect = require("chai").expect,
	Car = require("../src/myCar.js");

// 'Describe' groups stuff together
// 'it' is a test (iteration), tests each feature

// Testing Car
describe("Car", function(){

	describe("has defaults", function(){
		var myCar = new Car('Toyota', 'Camry', '2004', 'white');
		it("state default should be off", function(){
			expect(myCar.state).to.equal("off")
		})	
		it("currentOwner default should be manufacturer", function(){
			expect(myCar.currentOwner).to.equal("manufacturer");
		})
	})
	describe("changing car properties", function(){
		var myCar = new Car('Toyota', 'Camry', '2004','white');
		myCar.start();
		it("start should change state to on", function(){
			expect(myCar.state).to.equal("on");
		})
		it("dropOff should remove 1 passenger from the array", function(){
			expect(myCar.myFriend).to.equal("");
		})
	})
})

