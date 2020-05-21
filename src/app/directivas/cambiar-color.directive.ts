
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

const TAG = '[directivaCustom] ';

/**
 * Para aplicar la directiva nos vamos al componente ng-custom
 */
@Directive({
  selector: '[directivaCustom]'
})


export class CambiarColorDirective {

  //Inyección de dependencias el: ElementRef
  @Input('directivaCustom') nuevoColor : string
  constructor(private el: ElementRef) { }


  //Permite suscribirse a los eventos que ocurran en el DOM
  @HostListener('mouseleave') onMouseLeave(){
    this.cambiarColor(null);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiarColor(this.nuevoColor);
  }

  cambiarColor(color){
    console.log(TAG, 'color='+ color);
    this.el.nativeElement.style.backgroundColor = color;
  }


}
