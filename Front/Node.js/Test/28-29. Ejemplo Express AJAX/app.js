const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

app.get('/', (req,res) =>{
    res.setHeader('Content-type', 'text/html');
    res.send('./public/index.html');
});

app.get('/get-peliculas', (req, res) =>{
    const file =fs.readFileSync('./peliculas.json', 'UTF-8');
    res.setHeader('Content-type', 'text/json');
    res.send(file);
});

app.post('/new', (req,res)=>{
    res.setHeader('Content-type', 'text/plain');
    const nombre = req.body.nombre;
    const rating = req.body.rating;

    if(nombre ){

    }

    //Abrir archivo.
    let file =fs.readFileSync('./peliculas.json', 'UTF-8');

    //Convertirlo a un array.
    const json = JSON.parse(file);

    //Insertar un nuevo elemento.
    json.peliculas.push({"nombre": nombre, "rating": parseInt(rating)});

    //Guardar JSON en el archivo.
    file = fs.writeFileSync('./peliculas.json', JSON.stringify(json));

    res.send('Datos guardados con éxito.');
});

app.listen(3001,() =>{
    console.log('Servidor iniciado...');
});