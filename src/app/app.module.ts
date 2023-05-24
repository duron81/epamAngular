import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { CoursesComponent } from './courses/courses.component';
import { InputComponent } from './courses/input/input.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/courses-list/course-item/course-item.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    CoursesComponent,
    InputComponent,
    CoursesListComponent,
    FooterComponent,
    CourseItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
