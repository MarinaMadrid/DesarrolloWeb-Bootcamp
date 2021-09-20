import * as readline from 'readline-sync';

function media(){
    var num1 = readline.question('Elige un numero: ');
    var num2 = readline.question('Elige un segundo numero: ');
    var num3 = readline.question('Elige un tercer numero: ');
    var num4 = readline.question('Elige un cuarto numero: ');
    var num5 = readline.question('Elige un quinto numero: ');
    var suma = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
    var numtotal = 5;
    var media = suma / numtotal;
    return media;
}

function resultado(){
    let resultado = media();
    console.log(`La media de los números introducidos es ${resultado}.`);
}

resultado();
