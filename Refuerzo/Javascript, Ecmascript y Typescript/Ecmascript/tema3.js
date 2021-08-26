class Persona {
    constructor(nombre, apellido, dni) {
        // Inicializa las variables
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

class Trabajador extends Persona {
    constructor(nombre, apellido, dni, nombreEmpresa, direccionEmpresa) {
        // Inicializa las variables
        super(nombre, apellido, dni);
        this.nombreEmpresa = nombreEmpresa;
        this.direccionEmpresa = direccionEmpresa;
    }
}

// Crea un trabajador y muestra alguno de sus atributos
var miTrabajador = new Trabajador("Juan", "Pérez", "12345678A","Imagina Group", "Valencia");
console.log(miTrabajador.nombre, " ", miTrabajador.apellido);


//Función suma
function sumaArray(numeros) {
    var suma = 0;
    // Realiza el bucle sobre el parámetro números
    for(var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    // Devuelve la suma de todos los elementos.
    return suma;
}
// Inicializa la variable array y llama al método
console.log(sumaArray([1, 3, 4, 2]));


//Arrow Function para sumar, otro método
function sumaArray2(numeros) {
    var suma = 0;
    numeros.forEach(x => suma += x);
    return suma;
}
//Operador de propagación
var miArray = [4, 2, 5, 4];
console.log(sumaArray([...miArray, 1, 3, 4, 2]));