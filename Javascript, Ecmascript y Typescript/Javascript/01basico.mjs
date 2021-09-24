import * as readline from 'readline-sync';

//TODO: 1. Solicitar al usuario un número por consola y saber si es par o no
function numeroPar(){
    var numero1 = parseInt(readline.question("Escribe un numero para saber si es par: "));
    if (numero1%2 == 0){
        console.log(`El número ${numero1} es par.`);
    } else {
        console.log(`El número ${numero1} es impar.`);
    } 
}

numeroPar();

//TODO: 2. Solicitar al usuario un número por consola y saber si es primo o no
function calculoPrimo(){ 
    let numero2 = parseInt(readline.question("Escribe un numero para saber si es primo: "));
    numero2 = num => {
        if(num == 0 || num == 1 || num == 4) return false;
        for (let i =2; i < num/2; i++) {
            if (num%i==0) return false;
        }
        return true;
    };
}

function numeroPrimo(){
    var numero2 = calculoPrimo();
    if(numero2 == false){
        console.log(`El número ${numero2} no es primo.`);
    } else {
        console.log(`El número ${numero2} es primo.`); 
    }
}

numeroPrimo();

//TODO: 3. Investigar: SHIFT y UNSHIFT()
//Shift(): elimina un elemento desde el principio de un array
let frutas = ['kiwi', 'plátano', 'naranja'];
console.log(frutas);
frutas.shift();
frutas.shift();
console.log(frutas);


//Unshift(): añade elementos desde el principio de un array
let deportes = ['fútbol'];
console.log(deportes);
deportes.unshift('natación');
deportes.unshift('rugby', 'kárate');
console.log(deportes);

//TODO: 4. Investigar cómo eliminar un elemento por ID (desde dónde y cuántos)
//var nombre = document.getElementById("nombre");
//var apellidos = document.getElementById("apellidos");
//nombre.removeChild(apellidos);