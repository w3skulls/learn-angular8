import { Component, OnInit, Input } from '@angular/core';

const TAG = '[UsuarioaliasComponent] ';

@Component({
  selector: 'app-usuarioalias',
  templateUrl: './usuarioalias.component.html',
  styleUrls: ['./usuarioalias.component.scss']
})
export class UsuarioaliasComponent implements OnInit {

  @Input('usuarioAliasFront') usuarioAliasFront : any;


  constructor() { }

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

}
