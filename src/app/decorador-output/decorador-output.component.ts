import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


const TAG = '[DecoradorOutputComponent] ';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.scss']
})
export class DecoradorOutputComponent implements OnInit {

  //el evento que se va a enviar al padre (eventoPersonalizado)
  @Output('eventoPersonalizado') 
  emitter = new EventEmitter<string>();

  mensajeParaEmitir = 'Esto es el mensaje que se emite desde ' + TAG + 'mediante un Alias';

  ngOnInit(): void {
    console.log(TAG, "Iniciando");
  }

  ejecutarEvento(ev){
    this.emitter.emit(this.mensajeParaEmitir);
  }

}
