import { Component, OnInit } from '@angular/core';

const TAG : string = "[NgForComponent] ";

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  constructor() { }

  cursos = [
    {
      titulo: 'Curso de React de Carlos Azaustre',
      duracion: 21 
    },
    {
      titulo: 'Curso de Angular 8 - Desde básico hasta nivel profesional',
      duracion: 5
    }
  ];

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

}
