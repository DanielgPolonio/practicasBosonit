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
    res.send('Hola');
});

app.listen(3001,() =>{
    console.log('Servidor iniciado...');
});