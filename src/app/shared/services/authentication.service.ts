import { Injectable } from '@angular/core';

import { User } from '../interfaces/user.interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser!: User | null;

  login(user: User): void {
    this.loggedUser = {...user};
    localStorage.setItem("token", JSON.stringify(this.loggedUser));
    window.location.reload();
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedUser = null;
    // window.location.reload();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return !!token;
  }

  getUserLogin(): string {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token).email : '';
  }

}