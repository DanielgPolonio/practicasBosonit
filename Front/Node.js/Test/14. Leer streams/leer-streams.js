const fs = require('fs');

//No es factible con ficheros grandes.
// let contenido= fs.readFileSync('./logs.log');
// console.log(`tamaño: ${contenido.length}`);

let stream = fs.createReadStream('./logs.log', 'utf-8');
let data = '';
let suma =0;
let i=1;

stream.once('data', ()=>{
    console.log('Iniciando el stream...\n');
});

stream.on('data', (chunk) =>{
    suma+=chunk.length;
    console.log(`Linea ${i}: Tamaño del chunk: ${chunk.length} | Total: ${suma}`);
    i++;
    data+= chunk;
});

stream.on('end', () => {
    console.log('Fin del stream...');
    console.log(data.length);
})