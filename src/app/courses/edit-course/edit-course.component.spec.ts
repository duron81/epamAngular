import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { EditCourseComponent } from './edit-course.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { DurationPipePipe } from 'src/app/shared/pipes/duration-pipe.pipe';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import * as fromApp from '../../store/app.reducer'

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        StoreModule.forRoot(fromApp.appReducer)
       ],
      declarations: [EditCourseComponent, AddCourseComponent, DurationPipePipe, ButtonComponent]
    });
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
