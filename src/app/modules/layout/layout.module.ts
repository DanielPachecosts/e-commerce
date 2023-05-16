import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './page/layout/layout.component';

import { SliderComponent } from './components/slider/slider.component';

import { DialogModule } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartPageComponent } from '../cart/pages/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../../modules/products/products.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    SliderComponent,
    LandingPageComponent,
    SidebarComponent,
    CartPageComponent,
    FooterComponent,
    CategoryPageComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    DialogModule,
    FormsModule,
    OverlayModule,
    SharedModule,
    ProductsModule,
    CartModule,
  ],
})
export class LayoutModule {}
