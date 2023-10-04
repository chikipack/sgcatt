import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TeacherLoginComponent } from './pages/teacher-login/teacher-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPassComponent,
    TeacherLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
})
export class AuthModule {}
