import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './user/log-in/log-in.component';
import {RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {path:'', redirectTo:'/user/registration',pathMatch:'full' },
  {
    path: 'user',component: UserComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component:LogInComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
