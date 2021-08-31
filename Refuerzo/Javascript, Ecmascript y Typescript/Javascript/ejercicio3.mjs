import * as readline from 'readline-sync';

const cadena = readline.question('Escriba el texto: ');
const caracter = readline.question('Indica la letra a buscar: ');
const numVeces = buscarCaracter(cadena, caracter);
if (numVeces==1){
    console.log(`La letra ${caracter} se ha encontrado una vez.`);
} else {
    console.log(`La letra ${caracter} se ha encontrado ${numVeces} veces.`);
}

function buscarCaracter(cadena, caracter){
    let indices = [];
    for(let i = 0; i < cadena.length; i++){
        console.log(cadena[i]);
        if (cadena[i].toUpperCase() === caracter.toUpperCase()) indices.push(i);
    }
    let encontrado = indices[indices.length-1];
    //cadena[encontrado-1] = "Encontrado!";
    console.log(indices);
    console.log(encontrado);
    console.log(cadena.slice(0, encontrado-1));
    console.log(cadena.slice(encontrado+1, cadena.length-1));
    cadena = cadena.slice(0, encontrado) + "Encontrado!" + cadena.slice(encontrado+1, cadena.length);
    console.log(cadena);
    
    return indices.length;
}