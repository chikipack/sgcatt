import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { state } from '@angular/animations';

// export const teacherGuard: CanActivateFn = (route, state)=>{
//   const authService = inject(AuthService)
//   return authService.
// }

export const welcomeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.redirectToStudentHomeIfLoggedIn();
};

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isLogged();
};

export const teacherAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isTeacherLogged();
};
