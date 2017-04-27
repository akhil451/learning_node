var emitter = require('events');
var emitterconfig = require('./config').events;
 
var emtr=new emitter();
 

 emtr.on(function(emitterconfig.GREET,function(){
 console.log("HELO");

 });

 emtr.on(function(emitterconfig.GREET,function(){
 console.log("hola");

 });

emtr.on(function(emitterconfig.RESENT,function(){
 console.log("hola");

 });
 

 emitr.emit('emitterconfig.events.GREET');
emitr.emit('emitterconfig.events.RESENT');