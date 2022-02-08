const fs = require('fs');

//Renombrar sincrono

// fs.renameSync('./prueba.txt', './config.txt');

//Renombrar asincrono
// fs.rename('./config.txt', './prueba.txt', (err)=>{
//     if(err){
//         throw(err);
//     }
//     console.log('El archivo fue renombrado exitosamente');
// })

//Mover archivo
// fs.rename('./prueba.txt', './src/prueba.txt', (err)=>{
//     if(err){
//         throw(err);
//     }
//     console.log('El archivo fue movido exitosamente');
// });
//Eliminar archivo
fs.unlinkSync('./src/prueba.txt');
console.log('El archivo ha sido eliminado');