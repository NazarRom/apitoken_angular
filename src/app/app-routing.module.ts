import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MiperfilComponent } from './components/miperfil/miperfil.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:HomeComponent},
  {path:"plantilla",component:PlantillaComponent},
  {path:"perfil",component:MiperfilComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

