import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthenticationGuard]},
  {path:'list',component:ListComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
