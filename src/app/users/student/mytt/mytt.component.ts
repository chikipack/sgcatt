import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProtocolDialogComponent } from './protocol-dialog/protocol-dialog.component';

@Component({
  selector: 'app-mytt',
  templateUrl: './mytt.component.html',
  styleUrls: ['./mytt.component.css'],
})
export class MyttComponent implements OnInit {
  data = [
    {
      title: 'Project A',
      date: '2023-10-09',
      students: ['Lorem', 'Ipsum', 'Dolor'],
      teachers: ['Sit', 'Amet', 'Consectetur'],
      panelists: ['Adipiscing', 'Elit', 'Sed'],
      status: 'Failed',
    },
    {
      title: 'Project B',
      date: '2023-10-10',
      students: ['Lorem', 'Ipsum', 'Dolor', 'Sit'],
      teachers: ['Amet', 'Consectetur', 'Adipiscing'],
      panelists: ['Elit', 'Sed', 'Do', 'Eiusmod'],
      status: 'Failed',
    },
    {
      title: 'Project C',
      date: '2023-10-11',
      students: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
      teachers: ['Consectetur', 'Adipiscing', 'Elit', 'Sed'],
      panelists: ['Do', 'Eiusmod', 'Tempor', 'Incididunt'],
      status: 'In progress',
    },
  ];

  hasProjects!: boolean;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.hasProjects = false;
  }

  dialogRefAdd!: MatDialogRef<ProtocolDialogComponent>;
  openProtocolForm(): void {
    this.dialogRefAdd = this.dialog.open(ProtocolDialogComponent, {
      height: '80%',
      width: '60%',
    });

    this.dialogRefAdd.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  //testing functions
  changeView() {
    this.hasProjects = !this.hasProjects;
  }
}
