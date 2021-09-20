import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = '';
  http: any;

  constructor() { }

  getUsuarios() {
    return this.http.get(this.url);
  }

  postUsuario(usuario) {
    return this.http.post(this.url, usuario.id);
  }

  putUsuario(usuario) {
    return this.http.put(this.url + '/' + usuario.id, usuario)
  }

  deleteUsuario(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
