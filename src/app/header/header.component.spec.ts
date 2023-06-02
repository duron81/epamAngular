import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  @Component({
    selector: 'app-logo',
    template: '<p>Mock Logo component</p>'
  })
  class MockLogoComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockLogoComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
