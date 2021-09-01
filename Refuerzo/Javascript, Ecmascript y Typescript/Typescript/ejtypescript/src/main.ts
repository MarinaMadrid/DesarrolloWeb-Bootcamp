import * as readline from 'readline-sync';

enum Tipo {Completada, Incompleta, Eliminada}

class Todo{
    mensaje: string;
    tipo: Tipo;
    constructor(mensaje: string, tipo: Tipo) {
        this.mensaje = mensaje;
        this.tipo = tipo;
    }

    isCompleta() { return this.tipo === Tipo.Completada }
    marcarCompleta() { this.tipo = Tipo.Completada; }
}

class ListadoTareas {
    listado: Todo[] = [];

    agregarNuevaTarea(tarea: Todo) {
        this.listado.push(tarea);
    }

    modificarTarea(indice: number, tarea: Todo) {
        this.listado[indice] = tarea;
    }

    mostrarListado(indice?: number) {
        if(indice) { console.log("Tu tarea es: ", this.listado[indice]); }
        else { console.log("Tus tareas son: ", this.listado); }
    }
}

function main() {
    var continuar = true;

    // Crear lista vacía
    var lista = new ListadoTareas;

    // Bucle
    while(continuar) {
        // Logs por consola indicando las acciones que puede realizar el usuario
        console.log("Bienvenido, estas son las acciones disponibles:");
        console.log("1. Agregar nueva tarea / 2. Modificar tarea / 3. Mostrar una tarea concreta / 4. Mostrar el listado completo de tareas / 5. Salir")
        // Obtenemos accion del usuario
        var accion = parseInt(readline.question('Elige tu accion: '));

        switch(accion) {
            case 1: // Agregar una nueva tarea
                // Capturar por consola mensaje y tipo
                var msjNuevo = readline.question('Escriba un mensaje: ');
                var tipoNuevo = parseInt(readline.question('Escriba un tipo: '));
                // Llamar al método agregarNuevaTarea
                var tareaNueva = new Todo(msjNuevo, tipoNuevo);
                lista.agregarNuevaTarea(tareaNueva);
                break;
            case 2: // Modificar tarea
                // Capturar por consola mensaje y tipo
                var msjMod = readline.question('Escriba un mensaje: ');
                var tipoMod = parseInt(readline.question('Escriba un tipo: '));
                // Capturar por consola el índice
                var indiceMod = parseInt(readline.question('Escriba un indice: '));
                // Llamar al método modificarTarea
                var tareaMod = new Todo(msjMod, tipoMod);
                lista.modificarTarea(indiceMod, tareaMod);
                break;
            case 3: // Mostrar una tarea concreta
                // Capturar por consola el índice
                var verIndice = parseInt(readline.question('Escriba un indice: '));
                // Llamar al método mostrarListado
                lista.mostrarListado(verIndice);
                break;
            case 4:
                // Llamar al método mostrarListado
                lista.mostrarListado();
                break;
            case 5:
                console.log("Espero que le haya sido de utilidad.")
                continuar = false;
                break;
            default:
                console.log("Por favor, elija una opción valida.")
                break;
        }
    }
}

main();