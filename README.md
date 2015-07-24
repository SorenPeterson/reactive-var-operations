# Reactive Var Operators

Table of Contents

1. Why did I create this?
2. Installation
3. Usage
4. I don't like this/I think it could be better/Something better already exists

## 1. Why did I create this?

I created this package because I often want to quickly increment/decrement or otherwise modify a ReactiveVar. This package gives you four methods to help with that. I would have made a pull request on the reactive-var repo but I could find no such thing. If you know where this is, please let me know :)

## 2. Installation

Getting up and running is the same as any other meteor package:

	meteor add sorenpeterson:rective-var-operators

## 3. Usage

This package is pretty simple. It just adds a few operators to the ReactiveVar prototype.

After installing this package you will be able to do things like this:

	var someNumber = new ReactiveVar(42);
	Tracker.autorun(function() {
		console.log(someNumber.get());
	});
	someNumber.add(8);
	someNumber.subtract(10);
	someNumber.multiply(2);
	someNumber.divide(8);

And it will print these results:

	42 // initial value
	50 // 42 + 8
	40 // 50 - 10
	80 // 40 * 2
	10 // 80 / 8

## 4. I don't like this/I think it could be better/Something better already exists

Please let me know! Open an issue or tweet at me or email me. However works best for you. I won't give out me email here, but it's probably easy enough to find. My twitter is sorenpeterson. Thanks in advance for comments or criticisms.

