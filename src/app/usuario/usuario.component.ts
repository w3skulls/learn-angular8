import { Component, OnInit, Input, ɵpatchComponentDefWithScope } from '@angular/core';

const TAG = '[UsuarioComponent] ';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() usuarioFront
  constructor() { 
  }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
    console.log(TAG + "usuarioFront", this.usuarioFront);
  }

}
