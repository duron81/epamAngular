import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Directive, ElementRef, Pipe, PipeTransform } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { HighlightCreationDateDirective } from 'src/app/shared/directives/highlight-creation-date.directive';



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
      imports: [ FormsModule ],
      declarations: [
        CoursesListComponent, 
        ButtonComponent, 
        CourseItemComponent, 
        MockOrderByPipe, 
        MockDurationPipe, 
        FilterPipe,
        HighlightCreationDateDirective
      ],
      providers: [
        FilterPipe
      ]
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
  

});
