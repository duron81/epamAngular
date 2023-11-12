import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { concatMap, map, mergeMap } from 'rxjs';

import { AuthenticationService } from '@services/authentication.service';
import { LoadingService } from '@services/loading.service';
import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../../../header/auth_store/auth.actions'

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  email!: string;
  password!: string;
  isButtonEnabled: boolean = false;
  id: number = 1;
  token?: string; 

  constructor(
    private authService: AuthenticationService, 
    private router: Router,
    private loadingService: LoadingService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    if (this.email && this.password) {
      this.isButtonEnabled = true;
    }
    else {
      this.isButtonEnabled = false;
    }
  }

  login(): void {
    this.loadingService.setLoadingSubject(true);
    this.store.dispatch(AuthActions.Login({login: this.email, password: this.password}));
    this.email = '';
    this.password = '';
    this.loadingService.setLoadingSubject(false);
  }
}

