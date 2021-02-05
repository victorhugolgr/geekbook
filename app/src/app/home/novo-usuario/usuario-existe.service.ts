import { Injectable } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioJaExiste() {
    return (conrol: AbstractControl) => {
      const valueChanges = conrol.valueChanges;
      if(!valueChanges) return of(null);
      return conrol.valueChanges.pipe(
        switchMap(nomeUsuario =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map(usuarioExiste =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
