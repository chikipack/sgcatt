import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StudentRoutingModule } from './student-routing.module';

import { HomeComponent } from './home/home.component';
import { MyttComponent } from './mytt/mytt.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { TtsugestionsComponent } from './ttsugestions/ttsugestions.component';
import { TtlibraryComponent } from './ttlibrary/ttlibrary.component';
import { TtcalendarComponent } from './ttcalendar/ttcalendar.component';

@NgModule({
  declarations: [HomeComponent, MyttComponent, InvitationsComponent, TtsugestionsComponent, TtlibraryComponent, TtcalendarComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class StudentModule {}
