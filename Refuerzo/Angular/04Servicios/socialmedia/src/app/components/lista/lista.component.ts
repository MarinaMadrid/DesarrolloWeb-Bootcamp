import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //private url = 'https://jsonplaceholder.typicode.com/users';
  private url = 'https://reqres.in/api/users'; //por si no funciona el enlace anterior

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.url = this.url;
    this.usuarioService.getUsuarios()
    .subscribe(respuesta => console.log(respuesta));
   }

  ngOnInit(): void {
  }

}
