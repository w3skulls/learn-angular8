import { Component, OnInit } from '@angular/core';

const TAG = '[BindingyeventosComponent] ';

@Component({
  selector: 'app-bindingyeventos',
  template: `
    <h1>PROPERTY BINDING</h1>
    <p>Las propiedades se escriben bajo corchetes [ ]</p>
    <p>button [disabled]="buttonStatus"<p>
    <img [src]="imageURL" />
    <br>
    <button [disabled]="buttonStatus" >Mi botón activado/desactivado</button>
    <br>
    <hr>

    <h1>CLASS BINDING</h1>
    <p>Podemos añadir una clase a un determinado elemento en base a una condición</p>
    <p> [class.activo] ="isActive"</p>
    <button [class.activo] ="isActive">Mi botón</button>
    <br>
    <hr>
    
    <h1>STYLE BINDING</h1>
    <p>Podemos añadir estilos a partir de condiciones</p>
    [style.backgorundColor] = "isActive ? "green" : "red"
    <br>
    <br>
    <button (click)="desactivarButton($event)" [style.backgroundColor] = "isActive2 ? 'green' : 'red'">Mi botón</button>
    <br>
    <hr>
    
    <h1>EVENT BINDING</h1>
    <p>Podemos añadir eventos</p>
    <button (click) = "clickEvent($event)">Event button</button>
    <br>
    <hr>`, 

  styleUrls: ['./bindingyeventos.component.scss']
})
export class BindingyeventosComponent implements OnInit {

  constructor() { }

  isActive = true;
  isActive2 = false;
  buttonStatus = true;
  imageURL = 'data:image/png;base64,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';

clickEvent(ev){
    alert('Funciona. Ver consola');
    console.log("Evento", ev);
    this.isActive2 = true;
  }

  desactivarButton(ev){
    console.log("ev", ev.target);
    this.isActive2 != this.isActive2;
  }

  filtering(ev){
    console.log("ev", ev);
  }

  ngOnInit(): void {
    console.log(TAG, "Iniciando");

  }

}
