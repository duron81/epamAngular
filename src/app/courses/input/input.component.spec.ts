import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InputComponent } from './input.component';


describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [InputComponent]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method onButtonClicked during button clicked', () => {
    spyOn(component, 'onButtonClick');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(component.onButtonClick).toHaveBeenCalled();
  });

  it('should console log the result in onButtonClicked method', () => {
    component.text = 'some text';
    spyOn(console, 'log');
    component.onButtonClick();
    expect(console.log).toHaveBeenCalledWith('some text')
  })

});
