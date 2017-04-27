
var person = 
{
  firstname :' ',
  lastname :' ',

 greet :function(){
 	console.log(this.firstname + " "+this.lastname);
 }
};

var john = Object.create(person);
john.firstname="john ";
john.lastname="snow";

john.greet();

 // FYI -- Its Object , not object;

// formant of an object --

// var ob_name ={
// 	name:value , its  a comma not a semicolon you jackass
// 	name: value ,  better 
//     name : value  nothing at the last one even if you like one

// } ; semicolon deserves to be here 