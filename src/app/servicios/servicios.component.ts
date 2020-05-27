import { UsuariosService } from '../services/usuarios/usuarios.service';
import { Component, OnInit } from '@angular/core';

const TAG = '[ServiciosComponent] ';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [
    UsuariosService
  ]
})
export class ServiciosComponent implements OnInit {

  usuarios:any = [];


  constructor(private usuariosService : UsuariosService) {
    //Con la inyección de dependencias no necesitamos crear un new()
    //let srvUsuarios = new UsuariosService();
    //this.usuarios = srvUsuarios.getUsuarios();

    //Para que funcione, necesitamos registrar el servicio en la aplicación
    this.usuarios = usuariosService.getUsuarios();
    console.log(TAG + "usuariosService: " + this.usuarios);
   }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
  }

}
