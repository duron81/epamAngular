import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CourseItemComponent } from './course-item/course-item.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, ButtonComponent, CourseItemComponent]
    });
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console log "clicked" onClickLoadMore method', () => {
    spyOn(console, 'log');
    component.onClickLoadMore();
    expect(console.log).toHaveBeenCalledWith('clicked');
  });

  it('should console log index onDeleteCourse method', () => {
    const mockCourseId = 3;

    spyOn(console, 'log');
    component.onDeleteCourse(mockCourseId);
    expect(console.log).toHaveBeenCalledWith(mockCourseId);
  })

});
