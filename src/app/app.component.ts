import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';
import { Router } from '@angular/router';
import { CourseService } from './shared/services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userName = '';
  loading = false;

  constructor(
    private authService: AuthenticationService, 
    private courseService:CourseService, 
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.courseService.loadingSubject.subscribe(response => {
      this.loading = response;
    })

    if (this.authService.isAuthenticated()) {
      this.authService.getUserLogin().subscribe(response => {
        this.authService.userSubject.next(JSON.parse(JSON.stringify(response)));
        this.router.navigate(['/courses']);
      })
    } else {
      this.userName = '';
      this.router.navigate(['/login']);
    }
  }

}
