import { Component, OnInit } from '@angular/core';

const TAG = '[SafeNavigationOperatorComponent] ';


@Component({
  selector: 'app-safe-navigation-operator',
  templateUrl: './safe-navigation-operator.component.html',
  styleUrls: ['./safe-navigation-operator.component.scss']
})
export class SafeNavigationOperatorComponent implements OnInit {

  persona = {
    nombre : 'Héctor',
    apellidos : 'Ochoa B.',
    telefonos : {
      movil : '(922)-514-366'
    },
    trabajo: {
      telefono: undefined
    }
  }
  
  constructor() {
    
   }

  

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
    console.log(TAG, this.persona);
  }

}
