//your JS code here. If required.
const student = {
	name : 'Jayesh'
};

object.prototype.getKeys = function() {
	return object.keys(this);
};

const keys = student.getKeys();
console.log(keys);