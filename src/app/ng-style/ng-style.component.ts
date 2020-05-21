import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

const TAG : string = "[NgStyleComponent] ";

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  bgCrimson : Boolean = true;
  colorWhite: Boolean = true;
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

  getColors(tematica){
    switch(tematica){
      case 'angular': return 'crimson'
      case 'react':   return 'cadetblue';
      case 'nodejs':  return 'lightgreen'
      default: return '#000000';
    }
  }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
  }

}
