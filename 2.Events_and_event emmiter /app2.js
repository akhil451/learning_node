
var emitter = require("./emitter"); // same name as that of the module 
var emtr = new emitter(); // same name as that of the constructor in the module .
emtr.on('greet',function(){
	console.log("namste !!");
});

emtr.on('greet',function(){
	console.log("asalam aleykkum ");
});

// the above two functions create an object 
// {
// 	greet:[ function(){
// 	console.log("namste !!");
// },
// function(){
// 	console.log("asalam aleykkum ");
// }
  

// ] -- end of array;
// }
emtr.on('resent',function(){
	console.log("get out of my face!!");
});

// after this function executes the object is 
// {
// 	'greet':[ function(){
// 	console.log("namste !!");
// },
// function(){
// 	console.log("asalam aleykkum ");
// }
//   'resent' : [function(){
// 	console.log("get out of my face!!");
// }]

// ] -- end of array ,


// }


emtr.emit('greet');
emtr.emit("resent")

