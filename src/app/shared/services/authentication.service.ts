import { Injectable } from '@angular/core';

import { User } from '../interfaces/user.interface.';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loggedUser?: User;

  login(user: User): void {
    this.loggedUser = {...user};
    localStorage.setItem("token", JSON.stringify(this.loggedUser));
  }

  logout(): void {
    localStorage.removeItem("token");
    this.loggedUser = undefined;
  }

  isAuthenticated(): boolean {
    if (this.loggedUser) {
      return true;
    }
    return false;
  }

  getUserLogin(): string | undefined {
    if (this.loggedUser) {
      return this.loggedUser.email
    }
    return undefined;
  }

}