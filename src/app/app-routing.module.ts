import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaEmpleadoComponent } from './components/vista-empleado/vista-empleado.component';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';

const routes: Routes = [
  {path:"home",component:VistaPrincipalComponent},
  {path:"empleado",component:VistaEmpleadoComponent},
  {path:"administrador",component:VistaAdministradorComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
