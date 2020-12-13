import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  /**
   * sets the user auth info
   * @param data the data
   */
  setCurrentUser(data) {
    localStorage.setItem('userRole', JSON.stringify(data));
  }
  /**
   * gets the current user
   */
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('userRole'));
  }
}
