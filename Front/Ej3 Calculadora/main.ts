const NUM_DIGITOS: number = 9;
const MAX_VALOR: number = 999999999;
let numeroAnterior: number = 0;
let operacion: string = '';

window.onload = function () {
    let elements = document.getElementsByTagName('button');
    let numElements = elements.length;
    for (let i = 0; i < numElements; i++) {
        let element = elements[i];
        element.onclick = clicBoton;
    }
}
function clicBoton(eventos) {
    let data = eventos.target.childNodes[0].data;
    if (eventos.target.childNodes[0].data == undefined) {
        data = eventos.target.childNodes[0].childNodes[0].data;
    }
    prepararOperacion(eventos, data);
}

function prepararOperacion(eventos, data) {
    let numero = Number(data);
    let pantalla = document.getElementById("screen");
    if (!isNaN(numero)) {
        if (Number(pantalla.innerHTML) == 0)
            pantalla.innerHTML = numero.toString();
        else if (pantalla.innerHTML.length < NUM_DIGITOS)
            document.getElementById("screen").innerHTML += numero;
    }
    else {
        numero = Number(pantalla.innerHTML);
        if (data != '=') {
            if (data != ',') {
                operacion = data;
                pantalla.innerHTML = '0';
                numeroAnterior = numero;
            }
            else {
                pantalla.innerHTML += '.';
            }
        }
        else {
            operar(pantalla, numero);
            operacion = '';
            numeroAnterior = 0;
        }
    }
}

function operar(pantalla, numero: number) {
    let auxCadena: string = pantalla.innerHTML;
    switch (operacion) {
        case '+': {//Sumar
            auxCadena = (numero + numeroAnterior).toString();
            break;
        }
        case '-': {//Restar
            auxCadena = (numeroAnterior - numero).toString();
            break;
        }
        case 'x': { //Multiplicar
            auxCadena = (numeroAnterior * numero).toString();
            break;
        }
        case '/': { //Dividir
            if (numero != 0)
                auxCadena = (numeroAnterior / numero).toString();
            break;
        }
        case 'c': { //Borrar
            auxCadena = '0';
            numeroAnterior = 0;
            break;
        }
        case 'exp': { //Exponencial
            auxCadena = Math.pow(numeroAnterior, numero).toString();
            break;
        }
        case ',': { //Decimal
            auxCadena += '.';
            break;
        }
        default: {
            break;
        }
    }
}