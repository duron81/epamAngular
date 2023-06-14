import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CourseItemComponent } from './courses-list/course-item/course-item.component';



describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  @Component({
    selector: 'app-input',
    template: '<p>Mock Input component</p>'
  })
  class MockInputComponent {}

  @Component({
    selector: 'app-courses-list',
    template: '<p>Mock Course List component</p>'
  })
  class MockCourseListComponent {
    @Input() searchValue: string = '';
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        CoursesComponent, 
        MockInputComponent, 
        ButtonComponent, 
        MockCourseListComponent, 
        CourseItemComponent]
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
