import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ttInput {
  title: string;
  type: string;
  studentNames: string[];
  teacherNames: string[];
  pdfName: string;
  status: string;
}

const ELEMENT_DATA: ttInput[] = [
  {
    title: 'Proyecto Uno',
    type: 'protocol',
    studentNames: ['Juan Pérez', 'Ana García'],
    teacherNames: ['Profesor A'],
    pdfName: 'proyecto_uno.pdf',
    status: 'En progreso',
  },
  {
    title: 'Proyecto Dos',
    type: 'TT1',
    studentNames: ['María Rodríguez', 'Luis González'],
    teacherNames: ['Profesor B'],
    pdfName: 'proyecto_dos.pdf',
    status: 'Completado',
  },
  {
    title: 'Proyecto Tres',
    type: 'TT2',
    studentNames: ['Carlos Martínez', 'Laura Sánchez'],
    teacherNames: ['Profesor C'],
    pdfName: 'proyecto_tres.pdf',
    status: 'En revisión',
  },
  // Agrega más objetos según sea necesario
];
@Component({
  selector: 'app-ttlibrary',
  templateUrl: './ttlibrary.component.html',
  styleUrls: ['./ttlibrary.component.css'],
})
export class TtlibraryComponent {
  displayedColumns: string[] = [
    'title',
    'type',
    'studentNames',
    'teacherNames',
    'pdfName',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
