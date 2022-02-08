const fs = require('fs');

const archivo ='prueba.txt';

//Validar si existe un archivo
// if(fs.existsSync(archivo)){
//     console.log('El archivo existe.');
// }else{
//     console.log('El archivo no existe.');
// }

// fs.access(archivo, fs.constants.F_OK, (err)=>{
//     if(err){
//         console.log('El archivo no existe.');
//     }else{
//         console.log('El archivo existe.');
//     }
// })

//Escribir en un archivo:
const contenido = 'Este es el contenido de un texto\n';
// fs.writeFileSync(archivo, contenido);
// console.log('Se ha escrito en el archivo');

//Async

// fs.writeFile(archivo, contenido, (error)=>{
// if (error){
//     throw error;
// }
// console.log('Se ha escrito en el archivo');
// })

const textoAdicional = 'Aquí va otra línea de código\n';

fs.appendFile(archivo, textoAdicional, (error)=>{
    if (error){
        console.log('No pudo añadirse texto');
        throw error;
    }
    console.log('Texto añadido');
})