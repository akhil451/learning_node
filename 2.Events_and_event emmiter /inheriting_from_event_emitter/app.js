var emitter= require('events');// requiring events to use its on and emit functions .

var util= require('util');// for inherits

var name="JOHN"
function Person(data){
     this.data =name;
	this.greeting = "Hey , I am "+this.data+ "!";
}
// this constructor creates an object by the name John and a greeting accordingly.

util.inherits(Person,emitter);
//
//by this statement , Person object now has interited event_emmiter.

Person.prototype.greet = function(){
console.log(this.greeting);
this.emit('greet',name); //this will call the on function
}
// added a fi=uction greet to Person.

var person1 = new Person(); // constructor called

person1.on('greet',function(name){
console.log("hello "+name+"!");
});

person1.greet();

  