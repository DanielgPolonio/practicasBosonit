var previousNumber = 0;
var operation = '';
window.onload = function () {
    var elements = document.getElementsByTagName('button');
    var numElements = elements.length;
    for (var i = 0; i < numElements; i++) {
        var element = elements[i];
        element.onclick = clicButton;
    }
};
function clicButton(events) {
    var data = events.target.childNodes[0].data;
    if (events.target.childNodes[0].data == undefined) {
        data = events.target.childNodes[0].childNodes[0].data;
    }
    setOperation(data);
}
function setOperation(data) {
    var number = Number(data);
    var screen = document.getElementById("screen");
    if (!isNaN(number)) {
        if (Number(screen.innerHTML) == 0)
            screen.innerHTML = number.toString();
        else if (screen.innerHTML.length < 9)
            document.getElementById("screen").innerHTML += number;
    }
    else {
        number = Number(screen.innerHTML);
        if (data != '=') {
            if (data != ',') {
                operation = data;
                screen.innerHTML = '0';
                previousNumber = number;
            }
            else {
                screen.innerHTML += '.';
            }
        }
        else {
            operate(screen, number);
            operation = '';
            previousNumber = 0;
        }
    }
}
function operate(screen, number) {
    var screenData = screen.innerHTML;
    console.log("En pantalla: " + screenData + " number: " + number + " previousNumber: " + previousNumber);
    switch (operation) {
        case '+': { //Sumar
            screenData = (number + previousNumber).toString();
            console.log("sumar: " + screenData);
            break;
        }
        case '-': { //Restar
            screenData = (previousNumber - number).toString();
            console.log("restar: " + screenData);
            break;
        }
        case 'x': { //Multiplicar
            screenData = (previousNumber * number).toString();
            break;
        }
        case '/': { //Dividir
            if (number != 0)
                screenData = (previousNumber / number).toString();
            break;
        }
        case 'c': { //Borrar
            screenData = '0';
            previousNumber = 0;
            break;
        }
        case 'exp': { //Exponencial
            screenData = Math.pow(previousNumber, number).toString();
            break;
        }
        case ',': { //Decimal
            screenData += '.';
            break;
        }
        default: {
            break;
        }
    }
    console.log("Final:" + screenData);
    screen.innerHTML = screenData;
}
