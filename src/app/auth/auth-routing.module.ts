import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'success-register',
    component: SuccessRegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'confirm-register',
    component: ConfirmRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
