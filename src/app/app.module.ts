import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingyeventosComponent } from './bindingyeventos/bindingyeventos.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingyeventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
