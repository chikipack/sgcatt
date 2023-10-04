import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('signupForm', { static: true }) signupForm!: NgForm;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
