import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarias/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/users/user.model';

const TAG = '[ServicioPosts2Component] Observable ';

@Component({
  selector: 'app-servicio-users',
  templateUrl: './servicio-users.component.html',
  styleUrls: ['./servicio-users.component.scss']
})
export class ServicioUsersComponent implements OnInit {

  users$ : Observable<User[]>

  constructor( private usuariosService : UsuariosService ) { }

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
    /*this.usuariosService.getUsers().subscribe((response)=>{
      console.log(TAG, response);
    });*/

    //Obetenemos el observable y lo usamos en la vista
    this.users$ = this.usuariosService.getUsers();
    console.log(TAG + " demo ", this.users$);
  }

}
