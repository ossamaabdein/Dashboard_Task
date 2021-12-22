import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

// users JSON file contains their data and rules
import users from '../.././users.json'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usersData = users;
  error = false;
  
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor( private _Router: Router, private _AuthService: AuthService) { }

  ngOnInit(): void {
  }

  submitloginForm(loginForm: FormGroup) {
    if(loginForm.valid) {
      // check if any of users matches login input data
      this.usersData.forEach((el:any) => {
        if (el.name == loginForm.value.userName && el.password == loginForm.value.password) {
          localStorage.setItem('userData', JSON.stringify({name: el.name, password: el.password}));
          localStorage.setItem('userRole', el.role);
          this._AuthService.saveUserData();
          this._Router.navigate(['/dashboard']);
        } else {
          this.error = true
        }
      });
    }
  }
}
