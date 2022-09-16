import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteDeEjemploComponent } from './components/componente-de-ejemplo/componente-de-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDeEjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
