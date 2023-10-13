import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  title: string;
  teacherName: string;
  objective: string;
  areas: string[];
  studentsRequired: number;
  contact: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Online Bookstore System',
    teacherName: 'Prof. Johnson',
    objective: 'Develop an online platform for buying and selling books.',
    areas: ['Web Development', 'E-commerce'],
    studentsRequired: 4,
    contact: 'johnson@example.edu',
  },
  {
    title: 'Inventory Management System',
    teacherName: 'Prof. Smith',
    objective:
      'Create a system to manage and track inventory for a retail store.',
    areas: ['Database Management', 'Software Engineering'],
    studentsRequired: 5,
    contact: 'smith@example.edu',
  },
  {
    title: 'Social Media Analytics Tool',
    teacherName: 'Prof. Williams',
    objective: 'Build a tool for analyzing and visualizing social media data.',
    areas: ['Data Analytics', 'Machine Learning'],
    studentsRequired: 3,
    contact: 'williams@example.edu',
  },
  {
    title: 'E-learning Platform',
    teacherName: 'Prof. Davis',
    objective:
      'Develop a platform for online education with interactive features.',
    areas: ['Web Development', 'Education Technology'],
    studentsRequired: 6,
    contact: 'davis@example.edu',
  },
  {
    title: 'Weather App',
    teacherName: 'Prof. Miller',
    objective:
      'Create a weather application that provides real-time weather updates.',
    areas: ['Mobile App Development', 'API Integration'],
    studentsRequired: 3,
    contact: 'miller@example.edu',
  },
  {
    title: 'Task Management System',
    teacherName: 'Prof. Brown',
    objective: 'Build a system for managing tasks and projects within a team.',
    areas: ['Project Management', 'Collaboration'],
    studentsRequired: 4,
    contact: 'brown@example.edu',
  },
  {
    title: 'Online Quiz Platform',
    teacherName: 'Prof. Jones',
    objective: 'Develop a platform for creating and taking online quizzes.',
    areas: ['Web Development', 'Education Technology'],
    studentsRequired: 5,
    contact: 'jones@example.edu',
  },
];

@Component({
  selector: 'app-ttsugestions',
  templateUrl: './ttsugestions.component.html',
  styleUrls: ['./ttsugestions.component.css'],
})
export class TtsugestionsComponent {
  displayedColumns: string[] = [
    'teacherName',
    'title',
    'objective',
    'areas',
    'required',
    'contact',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
