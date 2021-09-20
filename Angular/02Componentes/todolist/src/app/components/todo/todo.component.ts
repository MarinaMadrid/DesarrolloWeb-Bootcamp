import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //listado de tareas
  tareas: Todo[] = [];

  @Input() tarea: Todo;
  mensaje:string = "";
  fecha:Date = ;
  gradoImportancia = 0;

  constructor() {
  }

  ngOnInit() {
  }

  completar() {
    this.tarea.completar();
  }

  getColor() {
    switch (this.tarea.gradoImportancia) {
    case 1: return '#EF4816';
    case 2: return '#EA631F';
    case 3: return '#EEAE38';
    default: return '#57B9B0';
    }
  }

  crearTarea() {
    this.tareas.push(
    new Todo(this.mensaje, this.fecha, this.gradoImportancia, false)
    );
  }
}
