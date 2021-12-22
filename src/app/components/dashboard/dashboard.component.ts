import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private _AuthService: AuthService, public _Router: Router) {}
  
  ngOnInit(): void {
  }

  logout() {
    this._AuthService.logout();
  }
}
