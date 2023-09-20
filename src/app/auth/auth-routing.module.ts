import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { welcomeGuard } from './auth.guard';
import { TeacherLoginComponent } from './pages/teacher-login/teacher-login.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot',
        component: ForgotPassComponent,
        canActivate: [welcomeGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [welcomeGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [welcomeGuard],
      },
      {
        path: 'l3hr3r/login',
        component: TeacherLoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
