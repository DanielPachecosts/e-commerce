import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './page/layout/layout.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { CartPageComponent } from '../cart/pages/cart-page/cart-page.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'category/:id',
        component: CategoryPageComponent,
      },
      {
        path:'cart',
        canActivate:[AuthGuard],
        loadChildren: () =>
        import('../cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
