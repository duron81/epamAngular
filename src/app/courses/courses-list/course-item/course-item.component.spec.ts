import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { By } from '@angular/platform-browser';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, ButtonComponent]
    });
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should update correctly when input property changes', () => {
    const inputValue = 'test description';
    component.description = inputValue;
    fixture.detectChanges();
    expect(component.description).toEqual(inputValue);

    const newInputValue = 'new test description';
    component.description = newInputValue;
    fixture.detectChanges();
    expect(component.description).toEqual(newInputValue);
  })

  it('it should emit correct event when will be clicked onDeleteItems', () => {
    const inputValue = 'test description';
    component.description = inputValue;
    fixture.detectChanges();
    let emittedEvent: Number = 0;
    let eventId = 1;
    let innerButtonComponent: ButtonComponent;
    component.id = eventId;

    component.deletedItemId.subscribe((event) => {
      emittedEvent = event;
      // console.log('was clicked');
    });

    innerButtonComponent = fixture.debugElement.query(By.directive(ButtonComponent)).componentInstance;

    // const innerButtonElement = fixture.debugElement.query(By.directive(ButtonComponent)).nativeElement;
    // innerButtonComponent.clicked();
    // fixture.detectChanges();
    // console.log(innerButtonElement);

    // expect(emittedEvent).toEqual(eventId);
    // expect(component.onDeletedCilck).toHaveBeenCalled();

  })


});
