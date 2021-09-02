"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Completada"] = 0] = "Completada";
    Tipo[Tipo["Incompleta"] = 1] = "Incompleta";
    Tipo[Tipo["Eliminada"] = 2] = "Eliminada";
})(Tipo || (Tipo = {}));
var Todo = /** @class */ (function () {
    function Todo(_mensaje, _tipo) {
        if (_mensaje === void 0) { _mensaje = ""; }
        if (_tipo === void 0) { _tipo = 0; }
        this._mensaje = _mensaje;
        this._tipo = _tipo;
    }
    Todo.prototype.toString = function () {
        return "Tarea: {mensaje: " + this._mensaje + ", tipo: " + this._tipo + "}";
    };
    Todo.prototype.isCompleta = function () { return this._tipo === Tipo.Completada; };
    Todo.prototype.marcarCompleta = function () { this._tipo = Tipo.Completada; };
    Object.defineProperty(Todo.prototype, "mensaje", {
        get: function () {
            return this._mensaje;
        },
        set: function (nuevoMensaje) {
            this._mensaje = nuevoMensaje;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (nuevoTipo) {
            this._tipo = nuevoTipo;
        },
        enumerable: false,
        configurable: true
    });
    return Todo;
}());
var defaultTarea = new Todo('', 0);
var ListadoTareas = /** @class */ (function () {
    function ListadoTareas(_tarea) {
        if (_tarea === void 0) { _tarea = defaultTarea; }
        this._tarea = _tarea;
        this.listado = [];
    }
    ListadoTareas.prototype.agregarNuevaTarea = function (tarea) {
        this.listado.push(tarea);
    };
    ListadoTareas.prototype.modificarTarea = function (indice, msjMod, tipoMod) {
        this.listado[indice] = this.tarea;
        this.tarea.mensaje = msjMod;
        this.tarea.tipo = tipoMod;
    };
    ListadoTareas.prototype.mostrarListado = function (indice) {
        if (indice) {
            console.log("Tu tarea es: ", this.listado[indice]);
        }
        else {
            console.log("Tus tareas son: ", this.listado.toString());
        }
    };
    Object.defineProperty(ListadoTareas.prototype, "tarea", {
        get: function () {
            return this._tarea;
        },
        set: function (nuevaTarea) {
            this._tarea = nuevaTarea;
        },
        enumerable: false,
        configurable: true
    });
    return ListadoTareas;
}());
function main() {
    var continuar = true;
    // Crear lista vacía
    var lista = new ListadoTareas;
    // Bucle
    while (continuar) {
        // Logs por consola indicando las acciones que puede realizar el usuario
        console.log("Bienvenido, estas son las acciones disponibles:");
        console.log("1. Agregar nueva tarea / 2. Modificar tarea / 3. Mostrar una tarea concreta / 4. Mostrar el listado completo de tareas / 5. Salir");
        // Obtenemos accion del usuario
        var accion = parseInt(readline.question('Elige tu accion: '));
        switch (accion) {
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
                console.log("Espero que le haya sido de utilidad.");
                continuar = false;
                break;
            default:
                console.log("Por favor, elija una opción valida.");
                break;
        }
    }
}
main();
