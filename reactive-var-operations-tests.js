// Write your tests here!
// Here is an example.
Tinytest.addAsync('Add to ReactiveVar', function(test, next) {
	var initialValue = 1;
	var someNumber = new ReactiveVar(initialValue);
	Tracker.autorun(function() {
		if(someNumber.get() !== initialValue) {
			test.notEqual(initialValue, someNumber.get());
			next();
		}
	});
	someNumber.add(5);
	test.equal(someNumber.get(), 6, 'Expected value to be 6');
});
 
Tinytest.addAsync('subtract async', function(test, next) {
	var initialValue = 1;
	var someNumber = new ReactiveVar(initialValue);
	Tracker.autorun(function() {
		if(someNumber.get() !== initialValue) {
			test.notEqual(initialValue, someNumber.get());
			next();
		}
	});
	someNumber.subtract(5);
	test.equal(someNumber.get(), -4, 'Expected value to be -4');
});

Tinytest.addAsync('multiply async', function(test, next) {
	var initialValue = 1;
	var someNumber = new ReactiveVar(initialValue);
	Tracker.autorun(function() {
		if(someNumber.get() !== initialValue) {
			test.notEqual(initialValue, someNumber.get());
			next();
		}
	});
	someNumber.multiply(5);
	test.equal(someNumber.get(), 5, 'Expected value to be 5');
});

Tinytest.addAsync('divide async', function(test, next) {
	var initialValue = 1;
	var someNumber = new ReactiveVar(initialValue);
	Tracker.autorun(function() {
		if(someNumber.get() !== initialValue) {
			test.notEqual(initialValue, someNumber.get());
			next();
		}
	});
	someNumber.divide(5);
	test.equal(someNumber.get(), 0.2, 'Expected value to be 0.2');
});

