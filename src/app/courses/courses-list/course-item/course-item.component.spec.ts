import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DurationPipePipe } from 'src/app/shared/pipes/duration-pipe.pipe';
import { HighlightCreationDateDirective } from 'src/app/shared/directives/highlight-creation-date.directive';



describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseItemComponent, 
        ButtonComponent, 
        DurationPipePipe, 
        HighlightCreationDateDirective
      ], providers: [DurationPipePipe]
    })
    .overrideComponent(CourseItemComponent, {  set: {changeDetection: ChangeDetectionStrategy.Default}
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should update correctly when input property changes'), waitForAsync(() => {
    const inputValue = 'test description';
    component.description = inputValue;
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('.courseItemDescription')).nativeElement;
        expect(descriptionElement.textContent).toEqual(inputValue);
      })
  });

  it('it should emit correct event when will be clicked onDeleteItems', () => {

    spyOn(component.deletedItemId, 'emit');
    const mockId = 1;
    component.id = mockId;
    fixture.detectChanges();

    component.onDeletedCilck();

    expect(component.deletedItemId.emit).toHaveBeenCalledWith(mockId);

  })


});
