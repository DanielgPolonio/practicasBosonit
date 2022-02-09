const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('¡Hola a todos!');
});

app.get('/home', (req, res) =>{
    res.send('Estas en la página de inicio');
});

app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`);
});