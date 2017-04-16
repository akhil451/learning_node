
// function first-class

function print(){

	console.log("YOLO!");
}

function call(fn){
	fn();
}

call(print);// do bot use print();

// function expressions 
 var printing = function(){

 	console.log("Not On my watch");
 }

 printing();
 call(printing);