import * as readline from 'readline-sync';

function pedirNumeros(){
    var lista = [];
    for (let i=0; i<5; i++) {
        var num = readline.question('Elige un numero: ');
        lista.push(Number(num));
    }
    return lista;
}

function suma(lista){ 
    var suma = 0;
    lista.forEach(num => suma += num);
    return suma;
}

function media(lista) {
    var sumaResultado = suma(lista);
    var media = sumaResultado/lista.length;
    console.log(media);
    return media;
}

function resultado(lista){
    var lista = pedirNumeros();
    let resultado = media(lista);
    console.log(`La media de los números introducidos es ${resultado}.`);
}

resultado();

