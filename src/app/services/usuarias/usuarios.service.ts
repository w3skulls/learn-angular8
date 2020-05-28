import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users/user.model';





@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http : HttpClient) { }

  //Podemos tipar el método con lo que va a devolver
  getUsers() : Observable<User[]>{
    return this.http.get<User []>(this.url);
  }


}
