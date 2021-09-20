export class Pais {
  id: number;
  nombre: string;
  imagen: string;
  poblacion: number;
  url: string;

  constructor(id: number, nombre: string, imagen: string,
  poblacion: number, url: string) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.poblacion = poblacion;
    this.url = url;
  }
}
