import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  mensaje: string;
  fecha: Date;
  gradoImportancia: number;
  tareas: Todo[] = [];

  constructor() {
    this.mensaje = "mensaje",
    this.fecha =
    this.gradoImportancia = 1
  }

  ngOnInit(): void {
  }

  borrarDeLista(indice: number) {
    this.tareas.splice(indice, 1);
  }

}
