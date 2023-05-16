import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, FontAwesomeModule],
  exports: [CartComponent],
})
export class CartModule {}
