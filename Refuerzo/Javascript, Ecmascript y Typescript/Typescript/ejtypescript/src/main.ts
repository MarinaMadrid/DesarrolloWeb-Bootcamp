import * as readline from 'readline-sync';

enum Tipo {Completada, Incompleta, Eliminada}

class Todo{
    constructor(
        private _mensaje:string = "",
        private _tipo:Tipo = 0
    ) {
    }

    toString(){
        return `Tarea: {mensaje: ${this._mensaje}, tipo: ${this._tipo}}`
    }

    isCompleta() { return this._tipo === Tipo.Completada }
    marcarCompleta() { this._tipo = Tipo.Completada; }

    get mensaje():string{
        return this._mensaje;
    }

    set mensaje(nuevoMensaje:string){
        this._mensaje = nuevoMensaje;
    }

    get tipo():Tipo{
        return this._tipo;
    }

    set tipo(nuevoTipo:Tipo){
        this._tipo = nuevoTipo;
    }

}

const defaultTarea = new Todo(
    '',
    0
)

class ListadoTareas {
    listado: Todo[] = [];

    constructor(
        private _tarea:Todo = defaultTarea,
    ) {
    }

    agregarNuevaTarea(tarea: Todo) {
        this.listado.push(tarea);
    }

    modificarTarea(indice: number, msjMod:string, tipoMod:Tipo) {
        this.listado[indice] = this.tarea;
        this.tarea.mensaje = msjMod;
        this.tarea.tipo = tipoMod;
    }

    mostrarListado(indice?: number) {
        if(indice) { console.log("Tu tarea es: ", this.listado[indice]); }
        else { console.log("Tus tareas son: ", this.listado.toString()); }
    }

    get tarea():Todo{
        return this._tarea;
    }

    set tarea(nuevaTarea:Todo){
        this._tarea = nuevaTarea;
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
                lista.modificarTarea(indiceMod, msjMod, tipoMod);
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