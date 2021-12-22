import { Injectable } from '@angular/core';

// users JSON file contains their data and rules
import users from './users.json'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersJSON = users;

  userData:any;
  role:any;
  constructor() { }

  login(formData: any) {
    console.log(formData)
  }

  // Save data into local storage upon login
  saveUserData() {
    this.userData = JSON.stringify(localStorage.getItem('userData'));
    this.role = localStorage.getItem('userRole');
  }

  // Empty-up local storage after logout
  logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('userRole');
    this.userData = null;
    this.role = '';
  }
}

