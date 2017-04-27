// objects .

var akhil={
	name:"akhil"
}
console.log(akhil.name);
console.log(akhil['name']);
//using keys

var key = 'name';
console.log(akhil[key]);


// arrays and functions 

var arr=[];

arr.push(function(){
     console.log("hello");

});

arr.push(function(){
     console.log("hola");
     
});

arr.push(function(){
     console.log("namaste");
     
});

arr.forEach(function(item){

	item();
});