import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/services/authentication.service';
import { Observable } from 'rxjs';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userName = '';
  loading!: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
  ) {}

  
  ngOnInit(): void {
    this.loading = this.loadingService.getLoadingSubject();
  }

}
