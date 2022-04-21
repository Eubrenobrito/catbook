import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../home/login/login.component";
import {NovoUsuarioComponent} from "../home/novo-usuario/novo-usuario.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path:'',
      component: LoginComponent
    },
    {
      path: 'novousuario',
      component: NovoUsuarioComponent,

    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
