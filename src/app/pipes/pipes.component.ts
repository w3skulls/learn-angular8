import { Component, OnInit } from '@angular/core';

const TAG = "[PipesComponent] "; 

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  productos:any = [
    {id: 1, nombre: 'consola cmd', peso:'100', cantidad: '1200'},
    {id: 2, nombre: 'visual studio', peso:'124', cantidad: '2450'},
    {id: 3, nombre: 'intel Core i5', peso:'450', cantidad: '190'}
  ];

  constructor() { }


  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

}
