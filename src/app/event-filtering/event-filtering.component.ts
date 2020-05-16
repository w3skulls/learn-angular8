import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  template: `
  <h1>EVENT FILTERING</h1>
  <p>Filtro de eventos</p>
  <input type="text" (keyup)="onKeyUp($event)" [disabled] = "isDisabled"/>
  <br>
  <p>El concepto de event filtering consiste en que podemos entrar dentro de un evento para filtar, por ejemplo con keyup.enter estamos filtrando por el pulsado de la tecla enter del teclado.
  <br>
  <br>
  <p>Podemos asignar un #id a nuestro componente. Con este id referenciamos el valor introducido por el usuario en la caja.</p>
  <p>#usuario es lo que se llama template variable</p>
  <label for="usuario">
  <input id="usuario" type="text" (keyup.enter)="onKeyUpEnter(usuario.value)" #usuario/>
  <br>
  <p>(pulsar enter y ver consola)</p>
  <hr>
  `,
  styleUrls: ['./event-filtering.component.scss']
})
export class EventFilteringComponent implements OnInit {

  constructor() { 
  }

  inputText: string = "";
  isDisabled: boolean = false;

  onKeyUpEnter(usuario : String){
    alert("Se ha pulsado la tecla ENTER");
   // Introduciendo el id ya no hace falta meter  el target
   // console.log("ev", ev.target.value);
   console.log("[enterPresionado] Valor introducido", usuario);
  }

  enterPresionado(event : any){
    alert("Enter presionado. Desactivando input");
    console.log("[enterPresionado] event", event);
    this.isDisabled = true;
  }

  onKeyUp(ev){
    console.log('ev.keyCode', ev.keyCode);
    ev.keyCode === 13 ? this.enterPresionado(ev) :  this.inputText += "--" + ev.keyCode;
  }

  ngOnInit(): void {
    console.log("Iniciando el compoente eventFilterting");
  }

}
