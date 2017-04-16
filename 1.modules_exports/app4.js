// topological inheitance , function constructors ,

// function constructor -- creeates a new object 
var Person =function (firstname, lastname){
	this.firstname=firstname;
	this.lastname=lastname;
}

var john = new Person('john','Wick');
var lara = new Person("lara","Kroft");

console.log(lara.firstname);

// creating a prototype , i.e an object that would the properties of Person
Person.prototype.greet=function(){
console.log("hello !"+this.firstname +" " +this.lastname);
}
	
john.greet();
lara.greet();