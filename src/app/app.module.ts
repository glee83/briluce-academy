import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material icons
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { HomeComponent } from './components/home/home.component';
import { EnrollComponent } from './components/enroll/enroll.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    HomeComponent,
    EnrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
