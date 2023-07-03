import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthenticationService, private router: Router) {}

  @Input() userName: string = '';

  onLogOut(): void {
    this.authService.logout();
    this.userName = '';
    this.router.navigate(['/login']);
  }
}
