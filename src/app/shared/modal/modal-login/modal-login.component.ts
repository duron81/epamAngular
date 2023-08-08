import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@services/authentication.service';
import { LoadingService } from '@services/loading.service';
import { concatMap, map, mergeMap } from 'rxjs';


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
    private loadingService: LoadingService
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
    this.loadingService.loadingSubject.next(true);
    this.authService.login(this.email, this.password);
      // .pipe(map (response => {
      //   const token = JSON.parse(JSON.stringify(response)).token;
      //   localStorage.setItem("token", token);
      //   return response;
      // }))
      // .pipe(map (response => {
      //   this.authService.getUser()
      //     .subscribe(res => {
      //       this.authService.userSubject.next(JSON.parse(JSON.stringify(res)));
      //     })
      //   return response;
      // }))
      // .subscribe(
      //   (response) => {
      //     this.authService.isUserLogged.next(true);
      //     this.router.navigate(['/courses']);
      //   },
      //   (error) => {
      //     console.error('Error fetching data:', error);
      //   }
      // );
    this.email = '';
    this.password = '';
    this.loadingService.loadingSubject.next(false);
  }
}

