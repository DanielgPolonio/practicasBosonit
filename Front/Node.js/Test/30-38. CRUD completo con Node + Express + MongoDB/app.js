const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://dev:dev@localhost:27017/todos', {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once ('open', () =>{
    console.log('Conexión a la BD exitosa...');
})

connection.on('error', (err) =>{
    console.log('Error en la conexión a la BD: ', err);
});

app.get('/', (req, res) =>{
    res.json({response: 'success'});
});

app.listen(3000, () =>{
    console.log('servidor listo...');
});