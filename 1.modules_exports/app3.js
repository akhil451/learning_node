// implementing object in JS (Name-Value Pairs).


var person = {

    1:{

	name :"Jon Snow", 
	knows:"Nothing "
	},
	2:{
		name :"Kejriwal",
		knows:"BULLshitting",
		
	}
};// obejct ends with a semicolon(;)
 
 console.log(person['1']["name"]);
 var a=Object.keys(person);
console.log(a);


// function traverses nested objects and prints its name-value pairs
 for (var chars in person){
      if(typeof person[chars]==="object"){
      	console.log(person[chars]['name']+" knows "+person[chars]['knows']);
      }
 }

