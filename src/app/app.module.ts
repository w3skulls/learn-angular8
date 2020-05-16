import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingyeventosComponent } from './bindingyeventos/bindingyeventos.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    BindingyeventosComponent,
    EventFilteringComponent,
    TwowaydatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
