import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CourseService } from './shared/services/course.service';
import { AuthenticationService } from './shared/services/authentication.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { CoursesComponent } from './courses/courses.component';
import { InputComponent } from './courses/input/input.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './courses/courses-list/course-item/course-item.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HighlightCreationDateDirective } from './shared/directives/highlight-creation-date.directive';
import { DurationPipePipe } from './shared/pipes/duration-pipe.pipe';
import { ModalDeleteComponent } from './courses/modal-delete/modal-delete/modal-delete.component';
import { ModalLoginComponent } from './shared/modal/modal-login/modal-login.component';
import { HideIfNotAuthenticatedDirective } from './shared/directives/hide-if-not-authenticated.directive';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './404/page-not-found/page-not-found.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.interceptor';

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
    ButtonComponent,
    HighlightCreationDateDirective,
    DurationPipePipe,
    ModalDeleteComponent,
    ModalLoginComponent,
    HideIfNotAuthenticatedDirective,
    AddCourseComponent,
    PageNotFoundComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
