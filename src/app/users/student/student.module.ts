import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';

import { FileUploadModule } from 'primeng/fileupload';

import { ChunkPipe } from './ttcalendar/ttcalendar.component';

import { StudentRoutingModule } from './student-routing.module';

import { HomeComponent } from './home/home.component';
import { MyttComponent } from './mytt/mytt.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { TtsugestionsComponent } from './ttsugestions/ttsugestions.component';
import { TtlibraryComponent } from './ttlibrary/ttlibrary.component';
import { TtcalendarComponent } from './ttcalendar/ttcalendar.component';
import { ProtocolDialogComponent } from './mytt/protocol-dialog/protocol-dialog.component';
import { InvitationDialogComponent } from './invitations/invitation-dialog/invitation-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyttComponent,
    InvitationsComponent,
    TtsugestionsComponent,
    TtlibraryComponent,
    TtcalendarComponent,
    ProtocolDialogComponent,
    InvitationDialogComponent,
    ChunkPipe,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FileUploadModule,
    MatTableModule,
  ],
})
export class StudentModule {}
