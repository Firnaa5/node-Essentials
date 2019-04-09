var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = (name)=>{
	this.name=name;

}
 
util.inherits(Person, EventEmitter);

var ben = new Person("BenFranklin");

ben.on('speak' ,(said)=>{
	console.log(`${this.name}: ${said}`);

});

ben.emit('speak', "you may delay but time will not");