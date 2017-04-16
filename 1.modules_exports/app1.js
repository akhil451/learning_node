
// function first-class -- functions can be used as variables .
      
function print(){

	console.log("YOLO!");
}

function call(fn){
	fn();
}

call(print);// do bot use print();

// function expressions -- a variable can store a block of code . This is due to first class functions .


 var printing = function(){

 	console.log("Not On my watch");
 }

 printing();
 call(printing);