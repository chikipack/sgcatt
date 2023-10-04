import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './users/admin/admin.module';
import { StudentModule } from './users/student/student.module';
import { TeacherModule } from './users/teacher/teacher.module';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    StudentModule,
    TeacherModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
