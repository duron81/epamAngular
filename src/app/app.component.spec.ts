import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { InputComponent } from './courses/input/input.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseItemComponent } from './courses/courses-list/course-item/course-item.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { ButtonComponent } from './shared/components/button/button.component';
import * as fromApp from './store/app.reducer'



describe('AppComponent', () => {

  @Pipe({
    name: 'orderBy'
  })
  class MockOrderByPipe implements PipeTransform {
    transform(value: number): number {
      return value;
    }
  }

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      FormsModule,
      StoreModule.forRoot(fromApp.appReducer)
     ],
    declarations: [
      AppComponent, 
      HeaderComponent, 
      CoursesComponent, 
      InputComponent, 
      CoursesListComponent,
      CourseItemComponent,
      FooterComponent,
      LogoComponent,
      ButtonComponent],
    providers: []
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

});
