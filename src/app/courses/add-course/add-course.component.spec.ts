import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AddCourseComponent } from './add-course.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DurationPipePipe } from 'src/app/shared/pipes/duration-pipe.pipe';
import * as fromApp from '../../store/app.reducer'

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot(fromApp.appReducer)
      ],
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
