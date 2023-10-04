import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { authGuard, teacherAuthGuard, welcomeGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    // canActivate: [welcomeGuard],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'student',
    // canActivate: [authGuard],
    loadChildren: () =>
      import('./users/student/student.module').then(
        (module) => module.StudentModule
      ),
  },
  {
    path: 'teacher',
    // canActivate: [teacherAuthGuard],
    loadChildren: () =>
      import('./users/teacher/teacher.module').then(
        (module) => module.TeacherModule
      ),
  },
  {
    path: 'admin',
    //canActivate:[]
    loadChildren: () =>
      import('./users/admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
