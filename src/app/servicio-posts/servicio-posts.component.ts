import { Post } from '../models/post.model';
import { PostService } from './../services/post/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const TAG = '[ServicioPostsComponent] Obaservable ';

@Component({
  selector: 'app-servicio-posts',
  templateUrl: './servicio-posts.component.html',
  styleUrls: ['./servicio-posts.component.scss']
})
export class ServicioPostsComponent implements OnInit {

  posts:Array<Post> = [];

  constructor(private srvPost : PostService) { }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');

    //this.srvPost.getPosts() = Objeto de tipo Observable al que nos tenemos que suscribir;
    //console.log(TAG + 'posts', this.srvPost.getPosts());

    let observable:Observable<any>  = this.srvPost.getPosts();
    //console.log(TAG + 'observable', observable);
    observable.subscribe(response => {
      //console.log(TAG + 'response', response);
      this.posts = response;
    })
  }
}
