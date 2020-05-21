import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchcaseComponent } from './ng-switchcase/ng-switchcase.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgCustomComponent } from './ng-custom/ng-custom.component';
import { CambiarColorDirective } from './directivas/cambiar-color.directive';
import { SafeNavigationOperatorComponent } from './safe-navigation-operator/safe-navigation-operator.component';

import { BindingyeventosComponent } from './bindingyeventos/bindingyeventos.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';

import { FormsModule } from '@angular/forms';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioaliasComponent } from './usuarioalias/usuarioalias.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { DirectivasComponent } from './directivas/directivas.component'


@NgModule({
  declarations: [
    //Componentes, Directivas & Pipes.
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchcaseComponent,
    NgStyleComponent,
    NgClassComponent,
    NgCustomComponent,
    CambiarColorDirective,
    SafeNavigationOperatorComponent,
    NgStyleComponent,
    BindingyeventosComponent,
    EventFilteringComponent,
    TwowaydatabindingComponent,
    DecoradorInputComponent,
    UsuarioComponent,
    UsuarioaliasComponent,
    DecoradorOutputComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
