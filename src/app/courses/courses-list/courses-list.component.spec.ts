import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Directive, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { CoursesListComponent } from './courses-list.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { HighlightCreationDateDirective } from 'src/app/shared/directives/highlight-creation-date.directive';
import * as fromApp from '../../store/app.reducer'



describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  @Pipe({
    name: 'orderBy'
  })
  class MockOrderByPipe implements PipeTransform {
    transform(value: number): number {
      return value;
    }
  }

  @Pipe({
    name: 'durationPipe'
  })
  class MockDurationPipe implements PipeTransform {
    transform(value: number): number {
      return value;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        StoreModule.forRoot(fromApp.appReducer)
      ],
      declarations: [
        CoursesListComponent, 
        ButtonComponent, 
        CourseItemComponent, 
        MockOrderByPipe, 
        MockDurationPipe,
        HighlightCreationDateDirective
      ],
      providers: [Store]
    });
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});
