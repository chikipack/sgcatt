import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  @ViewChild('adminLoginForm', { static: true }) adminLoginForm!: NgForm;
  onSubmit() {
    console.log(this.adminLoginForm);
  }
}
