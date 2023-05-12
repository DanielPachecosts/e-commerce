import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { LayoutComponent } from './page/layout/layout.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonComponent } from './components/button/button.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalComponent } from './components/modal/modal.component';

import { DialogModule } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CartComponent,
    ProductComponent,
    LayoutComponent,
    ProductsComponent,
    ButtonComponent,
    SliderComponent,
    ModalComponent,
    LandingPageComponent,
    CategoryPageComponent,
    SidebarComponent,
    CartPageComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    DialogModule,
    FormsModule,
    OverlayModule,
  ],
})
export class LayoutModule {}
