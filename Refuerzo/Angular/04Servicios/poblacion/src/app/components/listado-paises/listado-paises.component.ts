import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {
  //listado de países
  paises: Pais[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paises = this.paisesService.obtenerTodos();
  }

  ordenaPaises() {
    this.paises = this.paisesService.obtenerOrdenadosPorID();
  }

  onChange($event) {
    this.paises = this.paisesService.obtenerPorPoblacion($event.target.value);
  }
}
