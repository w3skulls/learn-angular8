import { Component, OnInit } from '@angular/core';


const TAG : string = "[NgSwitchcaseComponent] ";

@Component({
  selector: 'app-ng-switchcase',
  templateUrl: './ng-switchcase.component.html',
  styleUrls: ['./ng-switchcase.component.scss']
})
export class NgSwitchcaseComponent implements OnInit {


  cursos = [
    {
      id: 1,
      titulo: 'Curso de React de Carlos Azaustre',
      duracion: 21, 
      tematica: 'react'
    },
    {
      id: 2,
      titulo: 'Curso de Angular 8 - Desde básico hasta nivel profesional',
      duracion: 5,
      tematica: 'angular'
    },
    {
      id: 3,
      titulo: 'Curso de NodeJS Avanzado',
      duracion: 7,
      tematica: 'nodejs'
    },
    {
      id: 4,
      titulo: 'Webinar desarrollo web con nodejs',
      duracion: 4,
      tematica: 'nodejs'
    }
  ];


  constructor() { }

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

}
