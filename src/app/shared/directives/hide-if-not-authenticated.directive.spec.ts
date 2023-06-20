import { Component, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { HideIfNotAuthenticatedDirective } from './hide-if-not-authenticated.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../services/authentication.service';

describe('HideIfNotAuthenticatedDirective', () => {

  @Injectable()
  class MockService extends AuthenticationService {

  }

  @Component({
    template: ''
  })
  class MockComponent {
    constructor(public viewContainerRef: ViewContainerRef, public mockAuthService: MockService) {}
    myTemplateRef!: TemplateRef<unknown>;
  }

  const elementRefMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);
  const rendererRefMock = jasmine.createSpyObj('Renderer2', ['nativeElement']);

  let fixture: ComponentFixture<MockComponent>;

  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, HideIfNotAuthenticatedDirective],
      providers: [
        {provide: MockService}
      ]
    }).createComponent(MockComponent);
  });

  it('should create an instance', () => {
    const mockTemplateRef = fixture.componentInstance.myTemplateRef;
    const mockViewContainerRef = fixture.componentInstance.viewContainerRef;
    const mockService= fixture.componentInstance.mockAuthService;

    const directive = new HideIfNotAuthenticatedDirective(mockTemplateRef, mockViewContainerRef, mockService);
    expect(directive).toBeTruthy();
  });
});
