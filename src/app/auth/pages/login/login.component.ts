import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CookieService } from 'ngx-cookie-service';

interface TokenResponse {
  access_token: string;
  token_type: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authService
      .getAuthToken(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((res: TokenResponse) => {
        console.log(res);
        this.cookieService.set('token', res.access_token, 1);
        this.router
          .navigate(['student/home'], { skipLocationChange: false })
          .then(() => {
            window.location.reload();
          });
      });
  }

  goToSignUp() {
    this.router.navigate(['/auth/signup']);
  }
}
