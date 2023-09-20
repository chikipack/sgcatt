import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: TeacherHomeComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
