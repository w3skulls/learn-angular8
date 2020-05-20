import { Component, OnInit } from '@angular/core';

const TAG : string = "[NgIfComponent] ";

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  isValid : boolean = true;

  cursos = [
    {
      title: 'Curso de React de Carlos Azaustre',
      time: 21 
    },
    {
      title: 'Curso de Angular 8 - Desde básico hasta nivel profesional',
      time: 5
    }
  ];

  noCursos(){
    this.cursos.length = this.isValid ? 1 : 0;
  }

  constructor() { }

  
  ngOnInit(): void {
    console.log(TAG, "Iniciando");
    this.noCursos();
  }

}
