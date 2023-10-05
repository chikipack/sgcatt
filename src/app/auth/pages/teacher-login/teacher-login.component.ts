import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';

interface TokenResponse {
  access_token: string;
  token_type: string;
}

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css'],
})
export class TeacherLoginComponent {
  @ViewChild('teacherLoginForm', { static: true }) teacherLoginForm!: NgForm;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  onSubmit() {
    console.log(this.teacherLoginForm);
    // this.authService
    //   .getAuthTokenTeacher(
    //     this.teacherLoginForm.value.email,
    //     this.teacherLoginForm.value.password
    //   )
    //   .subscribe((res: TokenResponse) => {
    //     console.log(res);
    //     this.cookieService.set('ttoken', res.access_token, 1);
    //     this.router
    //       .navigate(['teacher/home'], { skipLocationChange: false })
    //       .then(() => {
    //         window.location.reload();
    //       });
    //   });
  }
}
