import { Post } from './../../models/psot.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  //private http : HttpClient => permite interactuar con APIS o servidores
  constructor(private http : HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }




}
