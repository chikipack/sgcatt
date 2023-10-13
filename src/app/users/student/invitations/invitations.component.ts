import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InvitationDialogComponent } from './invitation-dialog/invitation-dialog.component';

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
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css'],
})
export class InvitationsComponent {
  invitationList: Invitation[] = [
    {
      sender: {
        id: 1,
        userType: 'Estudiante',
        isActive: true,
        nombres: 'Carlos',
        apellidoP: 'Garcia',
        apellidoM: 'Martinez',
        matricula: '2021001',
        correoInst: 'carlos.garcia@ejemplo.edu',
        correoPersonal: 'carlos@gmail.com',
      },
      title: 'ABC',
      fecha: new Date('2023-11-15T19:00:00'),
    },
    {
      sender: {
        id: 2,
        userType: 'Estudiante',
        isActive: true,
        nombres: 'Nami',
        apellidoP: 'Lopez',
        apellidoM: 'Gonzalez',
        matricula: '2021002',
        correoInst: 'ana.lopez@ejemplo.edu',
        correoPersonal: 'ana@yahoo.com',
      },
      title: 'APP mobile',
      fecha: new Date('2023-12-10T14:30:00'),
    },
    {
      sender: {
        id: 3,
        userType: 'Estudiante',
        isActive: true,
        nombres: 'Pedro',
        apellidoP: 'Ramirez',
        apellidoM: 'Fernandez',
        matricula: '2021003',
        correoInst: 'pedro.ramirez@ejemplo.edu',
        correoPersonal: 'pedro@hotmail.com',
      },
      title: 'I.A project',
      fecha: new Date('2024-05-20T16:00:00'),
    },
  ];

  constructor(public dialog: MatDialog) {}

  dialogRefViewInvitation!: MatDialogRef<InvitationDialogComponent>;
  openInvitation(invitationData: any): void {
    console.log(invitationData);
    this.dialogRefViewInvitation = this.dialog.open(InvitationDialogComponent, {
      height: '80%',
      width: '60%',
      data: { invitationData: invitationData },
    });
  }

  hasInvitations: boolean = true;
  changeView(): void {
    this.hasInvitations = !this.hasInvitations;
  }
}
