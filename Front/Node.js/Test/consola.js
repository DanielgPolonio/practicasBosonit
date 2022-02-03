var nombre;
var preguntas = ['¿Cómo te llamas?\n', '¿Cuántos años tienes?\n', '¿Cual es tu lenguaje de programación favorito?\n'];
var respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());

    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        process.exit();
    }
});

pregunta(0);