import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseItemComponent } from './courses-list/course-item/course-item.component';


describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [CoursesComponent, InputComponent, ButtonComponent, CoursesListComponent, CourseItemComponent]
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
