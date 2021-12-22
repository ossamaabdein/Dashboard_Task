import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { authAGuard } from './guards/authA.guard';
import { authBGuard } from './guards/authB.guard';
import { authCGuard } from './guards/authC.guard';
import { LoginComponent } from './components/login/login.component';
import { AComponent } from './UsersComponents/a/a.component';
import { BComponent } from './UsersComponents/b/b.component';
import { CComponent } from './UsersComponents/c/c.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "dashboard", canActivate:[AuthGuard], component: DashboardComponent,
  children: [
    {path: "A", canActivate:[authAGuard], component: AComponent},
    {path: "B", canActivate:[authBGuard], component: BComponent},
    {path: "C", canActivate:[authCGuard], component: CComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
