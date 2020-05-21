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
      id: 1,
      titulo: 'Curso de React de Carlos Azaustre',
      duracion: 21 
    },
    {
      id: 2,
      titulo: 'Curso de Angular 8 - Desde básico hasta nivel profesional',
      duracion: 5
    }
  ];

  onActualizar(ev){
    console.log(TAG, "Actualizando json de cursos");
    let nuevoCurso = JSON.parse('{"titulo":"Nodejs de 0 a experto","duracion":100}');
    this.cursos.push(nuevoCurso);
  }

  onBorrar(curso){
    console.log(TAG, "Borrando curso: " + curso.id + " que se encuentra en la posición " + this.cursos.indexOf(curso) + " del array de cursos.");
    this.cursos.splice(this.cursos.indexOf(curso), 1);

  }

  onEditar(curso){
    console.log(TAG, "Editando curso");
    this.cursos[this.cursos.indexOf(curso)].titulo = "No disponible";
  }

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

}
