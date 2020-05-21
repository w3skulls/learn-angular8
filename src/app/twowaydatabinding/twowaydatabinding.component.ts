import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.scss']
})
export class TwowaydatabindingComponent implements OnInit {

  constructor() { }

  persona =  {
    'nombre'  : "pepe",
    'edad'    : 40
  }

  ngOnInit(): void {
  }

}
