import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { InputComponent } from './input.component';
import * as fromApp from '../../store/app.reducer'


describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        StoreModule.forRoot(fromApp.appReducer)
      ],
      declarations: [InputComponent],
      providers: [Store],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
