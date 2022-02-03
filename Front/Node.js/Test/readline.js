var readline = require('readline');
var util = require('util');

var rl =readline.createInterface(process.stdin, process.stdout); 
var i=1;

var persona ={
    nombre:'',
    comentarios :[]
};

rl.question('¿Cómo te llamas?\n', (respuesta)=>{
    persona.nombre=respuesta;
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
    // console.log(`¡Hola, ${respuesta}!`);

rl.on('line', (input)=> {
    if(input.trim()=== 'salir'){
        var mensaje=util.format("Te llamas %s y dijiste esto: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
    process.exit();

    }
    persona.comentarios.push(input.trim());
    console.log("Escribiste la línea "+i+"...");
    i++;
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
});

});