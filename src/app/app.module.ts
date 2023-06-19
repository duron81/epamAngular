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
import { HighlightCreationDateDirective } from './shared/directives/highlight-creation-date.directive';
import { DurationPipePipe } from './shared/pipes/duration-pipe.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { CourseService } from './shared/services/course.service';
import { ModalDeleteComponent } from './courses/modal-delete/modal-delete/modal-delete.component';
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';
import { ModalLoginComponent } from './shared/modal/modal-login/modal-login.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { HideIfNotAuthenticatedDirective } from './shared/directives/hide-if-not-authenticated.directive';

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
    OrderByPipe,
    FilterPipe,
    ModalDeleteComponent,
    ClickStopPropagationDirective,
    ModalLoginComponent,
    HideIfNotAuthenticatedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CourseService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
