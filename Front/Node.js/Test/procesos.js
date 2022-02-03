function param(p){
    var index = process.argv.indexOf(p);
    return process.argv[index+1];
}

var nombre= param('--nombre');
var edad= param('--edad');
console.log(`Te llamas ${nombre} y tienes ${edad} años.`);