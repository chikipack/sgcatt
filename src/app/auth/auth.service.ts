import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
interface TokenResponse {
  access_token: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  getAuthToken(matricula: string, password: string): Observable<TokenResponse> {
    const formData = new FormData();
    formData.append('username', matricula.toString());
    formData.append('password', password);
    console.log(formData);
    return this.http.post('http://127.0.0.1:8000/auth/token', formData).pipe(
      map((response: any) => {
        // Puedes realizar cualquier procesamiento adicional aquí si es necesario.
        return response; // Devuelve la respuesta sin modificar.
      })
    );
  }

  getAuthTokenTeacher(
    matricula: string,
    password: string
  ): Observable<TokenResponse> {
    const formData = new FormData();
    formData.append('username', matricula.toString());
    formData.append('password', password);
    console.log(formData);
    return this.http
      .post('http://127.0.0.1:8000/auth/token/l3hr3r', formData)
      .pipe(
        map((response: any) => {
          // Puedes realizar cualquier procesamiento adicional aquí si es necesario.
          return response; // Devuelve la respuesta sin modificar.
        })
      );
  }

  isLogged(): Observable<boolean> {
    let token = this.cookieService.get('token');

    if (token) {
      return this.verifyToken(token).pipe(
        map((res) => {
          console.log(res);
          if (res) {
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }
        }),
        catchError((error) => {
          console.error('Error al verificar el token', error);
          this.router.navigate(['']);
          return of(false); // Devuelve false si hay un error en la verificación
        })
      );
    } else {
      this.router.navigate(['']);
      return of(false); // Devuelve false si no hay token en la cookie
    }
  }

  isTeacherLogged(): Observable<boolean> {
    let ttoken = this.cookieService.get('ttoken');
    if (ttoken) {
      return this.verifyToken(ttoken).pipe(
        map((res) => {
          console.log(res);
          if (res) {
            return true;
          } else {
            this.router.navigate(['/auth/l3hr3r/login']);
            return false;
          }
        }),
        catchError((error) => {
          console.error('Error al verificar el token', error);
          this.router.navigate(['/auth/l3hr3r/login']);
          return of(false); // Devuelve false si hay un error en la verificación
        })
      );
    } else {
      this.router.navigate(['/auth/l3hr3r/login']);
      return of(false); // Devuelve false si no hay token en la cookie
    }
  }

  redirectToStudentHomeIfLoggedIn(): Observable<boolean> {
    let token = this.cookieService.get('token');

    if (token) {
      return this.verifyToken(token).pipe(
        map((res) => {
          console.log(res);
          if (res) {
            return false; // Si la verificación es exitosa, devuelve false para bloquear la ruta
          } else {
            return true; // Si la verificación falla, devuelve true para permitir el acceso a la ruta
          }
        }),
        catchError((error) => {
          console.error('Error al verificar el token', error);
          this.router.navigate(['']);
          return of(false); // Devuelve false si hay un error en la verificación
        })
      );
    } else {
      return of(true); // Si no hay token en la cookie, devuelve true para permitir el acceso a la ruta
    }
  }

  verifyToken(token: string): Observable<boolean> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http
      .get<any>(`http://127.0.0.1:8000/student`, { headers })
      .pipe(
        catchError((error) => {
          // Handle the error in case the request fails
          console.error('Error al verificar el token', error);
          return of(false); // Return an Observable indicating that the verification was not successful
        })
      );
  }
}
