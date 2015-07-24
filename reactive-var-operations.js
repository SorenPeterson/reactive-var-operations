// Write your package code here!

ReactiveVar.prototype.add = function(num) {
	this.curValue += num;
}

ReactiveVar.prototype.subtract = function(num) {
	this.curValue -= num;
}

ReactiveVar.prototype.multiply = function(num) {
	this.curValue *= num;
}

ReactiveVar.prototype.divide = function(num) {
	this.curValue /= num;
}

