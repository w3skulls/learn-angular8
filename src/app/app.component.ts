import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'learn-angular8';
  info = '';

  constructor(){ };


  //función que recibe el parámetro;
  getMensaje(msn){
    console.log("msn recibido del hijo",msn);
    this.info = msn;
  }



}
