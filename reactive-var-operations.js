// Write your package code here!

ReactiveVar.prototype.add = function(num) {
	this.curValue += num;
	this.dep.changed();
}

ReactiveVar.prototype.subtract = function(num) {
	this.curValue -= num;
	this.dep.changed();
}

ReactiveVar.prototype.multiply = function(num) {
	this.curValue *= num;
	this.dep.changed();
}

ReactiveVar.prototype.divide = function(num) {
	this.curValue /= num;
	this.dep.changed();
}

