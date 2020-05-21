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
    SafeNavigationOperatorComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
