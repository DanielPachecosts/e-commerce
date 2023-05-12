import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page/layout/layout.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        component: LandingPageComponent
      },
      {
        path:'category/:id',
        component: CategoryPageComponent
      },
      {
        path:'cart',
        component: CartPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
