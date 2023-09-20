import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [

  {
    path: 'auth', component: SignInComponent,
    loadChildren: () => import('./components/sign-in/sign-in.module')
      .then(m => m.SignInModule),
    data: {
      title: 'register'
    }
  },
  {
    path: 'admin', component: AdminComponent,
    loadChildren: () => import('./components/admin/admin.module')
      .then(m => m.AdminModule),
    data: {
      title: 'admin'
    }, canActivate: [AuthGuard]
  },
  {
    path: 'user', component: UserComponent,
    loadChildren: () => import('./components/user/user.module')
      .then(m => m.UserModule),
    data: {
      title: 'user'
    }, canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'auth/log-in',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
