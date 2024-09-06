import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompaComponent } from './compa/compa.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { HalamadridComponent } from './halamadrid/halamadrid.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaComponent,
    ProgramacionComponent,
    HalamadridComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
