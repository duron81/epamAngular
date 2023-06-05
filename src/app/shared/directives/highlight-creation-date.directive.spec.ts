import { Component, Directive, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCreationDateDirective } from './highlight-creation-date.directive';


describe('HighlightCreationDateDirective', () => {

  @Component({
    template: `
      <div [appHighlightCreationDate]="creationDate" class="courseItemContainer">
        <div class="courseItemUpperBlock">
            <p class="courseItemCreationDate"></p>
        </div>
      </div>
    `
  })
  class TestComponent {
    creationDate: Date = new Date(2023, 5, 30);
  }

  const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);

  let fixture: ComponentFixture<TestComponent>;

  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightCreationDateDirective]
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new HighlightCreationDateDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });

});
