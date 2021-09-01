import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  PAISES = [
    new Pais(3, 'Argentina', 'arg.png',
    43131966, 'https://es.wikipedia.org/wiki/Argentina'),
    new Pais(2, 'Bélgica', 'bel.png',
    11250659, 'https://es.wikipedia.org/wiki/B%C3%A9lgica'),
    new Pais(1, 'España', 'esp.png',
    6524949, 'https://es.wikipedia.org/wiki/Espa%C3%B1a'),
    new Pais(4, 'Suazilandia', 'sua.png',
    1018449, 'https://es.wikipedia.org/wiki/Suazilandia'),
    ];

  constructor() { }

  /** Método que devuelve todos los países */
  obtenerTodos(): Pais[] {
    return this.PAISES;
  }

  /** Método que devuelve los países que tengan una población
  * mayor a la espeficidada por el parámetro 'poblacion' */
  obtenerPorPoblacion(poblacion: number): Pais[] {
    return this.PAISES.filter(elemento => elemento.poblacion > poblacion);
  }

  /** Método que devuelve los países ordenados por ID */
  obtenerOrdenadosPorID(): Pais[] {
    return this.PAISES.sort((n1, n2) => n1.id - n2.id);
  }
}
