import { Component, Directive, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCreationDateDirective } from './highlight-creation-date.directive';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';


describe('HighlightCreationDateDirective', () => {

  @Component({
    template: `
      <div [appHighlightCreationDate]="creationDate">
    `
  })
  class TestComponent {
    creationDate?: Date = new Date();
  }

  const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
  const rendererRefMock = jasmine.createSpyObj('Renderer2', ['nativeElement']);

  let fixture: ComponentFixture<TestComponent>;

  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightCreationDateDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).createComponent(TestComponent);
  });

  it('should create an instance', () => {
    const directive = new HighlightCreationDateDirective(elementRefMock, rendererRefMock);
    expect(directive).toBeTruthy();
  });

  it('should color the border in blue', () => {
    let testdate = fixture.componentInstance.creationDate = new Date();
    testdate.setDate(testdate.getDate()+15);
    fixture.detectChanges();
    expect(fixture.nativeElement.firstChild.style.borderColor).toBe('blue');
  })

  it('should color the border in green', () => {
    let testdate = fixture.componentInstance.creationDate = new Date();
    testdate.setDate(testdate.getDate()-2);
    fixture.detectChanges();
    expect(fixture.nativeElement.firstChild.style.borderColor).toBe('green');
  })

});
