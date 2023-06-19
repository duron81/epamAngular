import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthenticationService) {}

  @Input() userName: string = '';

  onLogOut(): void {
    this.authService.logout();
  }
}
