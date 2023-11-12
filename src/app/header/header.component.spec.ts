import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let store: MockStore;
  const initialState = {isAuth: false};
  let fixture: ComponentFixture<HeaderComponent>;

  @Component({
    selector: 'app-logo',
    template: '<p>Mock Logo component</p>'
  })

  class MockLogoComponent {}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, MockLogoComponent],
      providers: [
        provideMockStore({initialState})
      ]
    });
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
