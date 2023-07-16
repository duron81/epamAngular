import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth.guard';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    providers: [AuthGuard]
  });
});

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});

