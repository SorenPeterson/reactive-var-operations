// Write your tests here!
// Here is an example.
Tinytest.add('ReactiveVar.prototype.add()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.add(5);
	test.equal(someNumber.get(), 15, 'Expected value to be 15');
});

Tinytest.add('ReactiveVar.prototype.subtract()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.subtract(5);
	test.equal(someNumber.get(), 5, 'Expected value to be 5');
});
 
Tinytest.add('ReactiveVar.prototype.multiply()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.multiply(5);
	test.equal(someNumber.get(), 50, 'Expected value to be 50');
});

Tinytest.add('ReactiveVar.prototype.divide()', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.divide(5);
	test.equal(someNumber.get(), 2, 'Expected value to be 2');
});

