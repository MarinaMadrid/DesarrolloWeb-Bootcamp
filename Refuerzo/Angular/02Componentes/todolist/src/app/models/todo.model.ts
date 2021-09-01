export class Todo {
  mensaje: string;
  fecha: Date;
  gradoImportancia: number;
  completada: boolean;

  constructor(mensaje:string, fecha:Date, gradoImportancia: number, completada: boolean) {
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.gradoImportancia = gradoImportancia;
    this.completada = completada;
  }

  completar() {
    this.completada = !this.completada;
  }
}
