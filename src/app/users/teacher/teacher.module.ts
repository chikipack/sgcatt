import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { DirectorComponent } from './director/director.component';
import { SynodalComponent } from './synodal/synodal.component';

@NgModule({
  declarations: [TeacherHomeComponent, DirectorComponent, SynodalComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class TeacherModule {}
