var emitter = require('events');
var emitterconfig = require('./config').events;
 
var emtr=new emitter();
 

 emtr.on(emitterconfig.GREET,function(){
 console.log("HELO");

 });

 emtr.on(emitterconfig.GREET,function(){
 console.log("hola");

 });

emtr.on(emitterconfig.RESENT,function(){
 console.log("GET OUT!!");

 });
 

 emtr.emit(emitterconfig.GREET);
emtr.emit(emitterconfig.RESENT);