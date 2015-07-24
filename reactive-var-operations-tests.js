// Write your tests here!
// Here is an example.
Tinytest.add('Addition', function (test) {
	var someNumber = new ReactiveVar(10);
	someNumber.add(5);
	test.equal(someNumber.get(), 15, 'Expected value to be 15');
});

