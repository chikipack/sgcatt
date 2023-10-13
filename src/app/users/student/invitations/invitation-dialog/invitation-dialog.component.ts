import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Usuario {
  id: number;
  userType: string;
  isActive: boolean;
  nombres: string;
  apellidoP: string;
  apellidoM: string;
  matricula: string;
  correoInst: string;
  correoPersonal: string;
}

interface Invitation {
  sender: Usuario;
  title: string;
  fecha: Date;
}

@Component({
  selector: 'app-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.css'],
})
export class InvitationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { invitationData: Invitation }
  ) {
    console.log(data);
  }
}
