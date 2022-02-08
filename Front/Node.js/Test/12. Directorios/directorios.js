const fs = require('fs');

//mkdir
// fs.mkdirSync('./img');

// fs.mkdir('css', function (error) {
//     if (error){
//         throw('Error: '+error);
//     }
//     console.log('Carpeta creada...');
// })

if(fs.existsSync('css')){
    console.log('La carpeta ya existe...');
}else{
    fs.mkdir('css', function (error){
        if(error){
            throw error;
        }
    });
    console.log('La carpeta ha sido creada...');
}