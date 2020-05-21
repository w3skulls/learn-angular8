import { Component, OnInit } from '@angular/core';

const TAG : string = "[NgcustomComponent] ";

@Component({
  selector: 'app-ng-custom',
  templateUrl: './ng-custom.component.html',
  styleUrls: ['./ng-custom.component.scss']
})
export class NgCustomComponent implements OnInit {

  color : string = 'lightgreen';
  constructor() { }

  ngOnInit(): void {
    console.log(TAG, 'Iniciando');
  }


}
