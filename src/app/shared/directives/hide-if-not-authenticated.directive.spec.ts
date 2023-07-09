import { Component, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { HideIfNotAuthenticatedDirective } from './hide-if-not-authenticated.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../services/authentication.service';

describe('HideIfNotAuthenticatedDirective', () => {


  let mockTemplateRef: TemplateRef<unknown>; 
  let mockViewContainerRef: ViewContainerRef; 
  let mockAuthService: AuthenticationService;

  const mockService = jasmine.createSpyObj('AuthenticationService ', ['login', 'logout', 'isAuthenticated', 'getUserLogin']); 
  mockService.login.and.returnValue('mocked value');

  @Component({
    template: ''
  })
  class MockComponent {
    constructor(public viewContainerRef: ViewContainerRef) {}
    myTemplateRef!: TemplateRef<unknown>;
  }

  let fixture: ComponentFixture<MockComponent>;

  beforeEach( () => {
    fixture = TestBed.configureTestingModule({
      declarations: [MockComponent, HideIfNotAuthenticatedDirective],
      providers: [
        {provide: TemplateRef, useValue: {}}, 
        {provide: ViewContainerRef, useValue: {}}, 
        {provide: AuthenticationService, useValue:{mockService}}
      ]
    }).createComponent(MockComponent);
  });

  it('should create an instance', () => {
    mockTemplateRef = TestBed.inject(TemplateRef);
    mockViewContainerRef = TestBed.inject(ViewContainerRef);
    mockAuthService = TestBed.inject(AuthenticationService);

    const directive = new HideIfNotAuthenticatedDirective(mockTemplateRef, mockViewContainerRef, mockAuthService);
    expect(directive).toBeTruthy();
  });
});
