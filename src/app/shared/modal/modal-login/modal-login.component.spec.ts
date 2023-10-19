import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ModalLoginComponent } from './modal-login.component';
import * as fromApp from '../../../store/app.reducer'

describe('ModalLoginComponent', () => {
  let component: ModalLoginComponent;
  let fixture: ComponentFixture<ModalLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        FormsModule,
        StoreModule.forRoot(fromApp.appReducer)
       ],
      declarations: [ModalLoginComponent]
    });
    fixture = TestBed.createComponent(ModalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
