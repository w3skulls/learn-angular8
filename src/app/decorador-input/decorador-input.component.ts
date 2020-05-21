import { Component, OnInit } from '@angular/core';

const TAG = '[DecoradorInputComponent] ';

@Component({
  selector: 'app-decorador-input',
  templateUrl: './decorador-input.component.html',
  styleUrls: ['./decorador-input.component.scss']
})
export class DecoradorInputComponent implements OnInit {

  constructor() { }

  //Enviamos objeto usuario al componente hijo UsuarioComponent
  usuarioPadre = {
    user: 'manolito',
    pass: '9090'
  }

  usuarioAliasPadre = {
    nombre: 'pepe',
    apellidos: 'Díaz Dominguez',
    ciudad: 'Madrid'
  }



  ngOnInit(): void {
    console.log(TAG, "Iniciando")
  }

}
