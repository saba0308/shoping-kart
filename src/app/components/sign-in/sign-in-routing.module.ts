import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  { path: 'sign-up', component: SignUpComponent,data: {
    title: 'Shoppingkart Sign up'
  } },
  { path: 'log-in', component: LogInComponent ,data: {
    title: 'Shoppingkart  Sign In'
  }},
  { path: 'forgot-passsword', component: ForgotPasswordComponent,data: {
    title: 'Password Recovery'
  }},
  { path: '**', component: LogInComponent ,data: {
    title: 'Shoppingkart  Sign In'
  }},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
