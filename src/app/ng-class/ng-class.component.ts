import { Component, OnInit } from '@angular/core';


const TAG : string = "[NgClassComponent] ";

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  condClase1 : boolean = false;
  condClase2 : boolean = false;
  condClase3 : boolean = false;


  constructor() { }

  onChangeClass1(ev){
    this.condClase1 = true;
  }

  onChangeClass2(ev){
    this.condClase2 = true;
  }

  onChangeClass3(ev){
    this.condClase3 = true;
  }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
  }

}
