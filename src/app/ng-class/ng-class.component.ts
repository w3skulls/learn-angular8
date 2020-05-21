import { Component, OnInit } from '@angular/core';


const TAG : string = "[NgClassComponent] ";

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {


  colors: any = ['rojo', 'verde', 'azul'];

  constructor() { }


  onChangeTextColor(ev){
    let max = Math.floor(this.colors.length - 1);
    let color = this.colors[Math.floor(Math.random() * (max + 1))];
    console.log('color', color)
    return 'texto-' +  color;
  }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
  }

}
