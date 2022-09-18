import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteDeEjemploComponent } from './components/componente-de-ejemplo/componente-de-ejemplo.component';
import { VistaEmpleadoComponent } from './component/vista-empleado/vista-empleado.component';
import { VistaAdministradorComponent } from './component/vista-administrador/vista-administrador.component';
import { VistaPrincipalComponent } from './component/vista-principal/vista-principal.component';
import { BotonComponent } from './component/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDeEjemploComponent,
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
