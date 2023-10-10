import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytt',
  templateUrl: './mytt.component.html',
  styleUrls: ['./mytt.component.css'],
})
export class MyttComponent implements OnInit {
  hasProjects!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.hasProjects = true;
  }

  //testing functions
  changeView() {
    this.hasProjects = !this.hasProjects;
  }
}
