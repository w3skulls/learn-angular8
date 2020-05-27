import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }


  getUsuarios(){
    return [
      {nombre: 'Paula', tel: '632565353'},
      {nombre: 'Pepe', tel: '636362764'},
      {nombre: 'Lara', tel: '633621245'}
    ]
  }
}
