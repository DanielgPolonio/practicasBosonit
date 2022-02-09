const express = require('express');

var app = express();

app.use(express.static('./public')); //Con esta linea queda montado el servidor express


app.listen(3000);

console.log('Express iniciado...');