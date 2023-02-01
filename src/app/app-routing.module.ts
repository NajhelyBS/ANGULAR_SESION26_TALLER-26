import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { PermisoGuard } from './guards/permiso.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate:[PermisoGuard]},
  {path:"display", component:DisplayComponent, canActivate:[PermisoGuard]},
  {path: 'detalle/:id', component: DetalleComponent },
  {path:"**", pathMatch:"full", redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
