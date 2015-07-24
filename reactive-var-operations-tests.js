// Write your tests here!
// Here is an example.
Tinytest.add('Add to the ReactiveVar', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.add(5);
	test.equal(someNumber.get(), 15, 'Expected value to be 15');
});

Tinytest.addAsync('add async', function(test, next) {
	var someNumber = new ReactiveVar(0);
	Tracker.autorun(function() {
		if(someNumber.get() !== 0) {
			test.notEqual(0, someNumber.get());
			next();
		}
	});
	someNumber.add(5);
});

Tinytest.add('ReactiveVar.prototype.subtract()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.subtract(5);
	test.equal(someNumber.get(), 5, 'Expected value to be 5');
});
 
Tinytest.addAsync('subtract async', function(test, next) {
	var someNumber = new ReactiveVar(0);
	Tracker.autorun(function() {
		if(someNumber.get() !== 0) {
			test.notEqual(0, someNumber.get());
			next();
		}
	});
	someNumber.subtract(5);
});

Tinytest.add('ReactiveVar.prototype.multiply()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.multiply(5);
	test.equal(someNumber.get(), 50, 'Expected value to be 50');
});

Tinytest.addAsync('multiply async', function(test, next) {
	var someNumber = new ReactiveVar(1);
	Tracker.autorun(function() {
		if(someNumber.get() !== 1) {
			test.notEqual(1, someNumber.get());
			next();
		}
	});
	someNumber.multiply(5);
});

Tinytest.add('ReactiveVar.prototype.divide()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.divide(5);
	test.equal(someNumber.get(), 2, 'Expected value to be 2');
});

Tinytest.addAsync('divide async', function(test, next) {
	var someNumber = new ReactiveVar(1);
	Tracker.autorun(function() {
		if(someNumber.get() !== 1) {
			test.notEqual(1, someNumber.get());
			next();
		}
	});
	someNumber.divide(5);
});

