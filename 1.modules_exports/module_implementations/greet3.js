// this method allows  for abstraction and protects our data from
// being written over by external commands.

var greeting ="hello!!!";

var greet=function(){
	console.log(greeting);
}

module.exports={
	greet:greet
};
