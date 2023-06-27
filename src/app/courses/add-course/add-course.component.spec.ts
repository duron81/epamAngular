import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddCourseComponent } from './add-course.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DurationPipePipe } from 'src/app/shared/pipes/duration-pipe.pipe';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddCourseComponent, ButtonComponent, DurationPipePipe], providers: [DurationPipePipe]
    });
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
