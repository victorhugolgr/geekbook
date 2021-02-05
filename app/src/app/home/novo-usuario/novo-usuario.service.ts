import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario>{
    return this.http.post<NovoUsuario>(`${environment.urlbase}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario:string){
    return this.http.get(`${environment.urlbase}/user/exists/${nomeUsuario}`)
  }
}
