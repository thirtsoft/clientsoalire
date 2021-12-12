import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { ConfirmRegisterComponent } from './confirm-register/confirm-register.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent,
    SuccessRegisterComponent,
    LoginComponent,
    ProfilComponent,
    ConfirmRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
