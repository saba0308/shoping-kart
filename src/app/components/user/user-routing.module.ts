import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent,data: {
    title: 'ShoppingKart'
  } },
  {path:'products',component:ProductsComponent,data: {
    title: 'ShoppingKart'
  }},
  {path:'orders',component:OrdersComponent,data: {
    title: 'ShoppingKart'
  }},
  {path:'cart',component:AddToCartComponent,data: {
    title: 'ShoppingKart'
  }},
  {
    path:'**',component:LandingPageComponent,data: {
      title: 'ShoppingKart'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
