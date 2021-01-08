import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LogInComponent } from './user/log-in/log-in.component';
import {RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
//import {AuthService as AuthGuard } from './auth/auth.service';
const routes: Routes = [
  
  {path:'', redirectTo:'/user/login',pathMatch:'full' },
  {
    path: 'user',component: UserComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component:LogInComponent}
    ],
  },
 // {path:'header',component:HeaderComponent}

 {path:'header',component:HeaderComponent, canActivate:[AuthGuard]},
 {path:'forgotPassword',component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
