import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaEmpleadoComponent } from './components/vista-empleado/vista-empleado.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';
import { BotonComponent } from './components/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaEmpleadoComponent,
    VistaAdministradorComponent,
    VistaPrincipalComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
