import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {path:'products',component:ProductsComponent},
  {path:'**',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
