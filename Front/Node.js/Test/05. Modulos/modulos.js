var path = require('path');
var util = require('util');
var v8 = require('v8');

var nombre="Daniel";
var edad=29;
var texto= util.format('Hola %s, tienes %d años', nombre, edad);
console.log(v8.getHeapCodeStatistics());
// console.log(texto);
// console.log(path.basename(__filename));

// console.log(path.join(__dirname, 'www', 'img', 'home','uploads'));