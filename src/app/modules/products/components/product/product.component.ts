import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from 'src/app/modules/products/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    description: '',
    price: 0,
    title: '',
    images: [''],
    category: { id: 0, name: '', image: '' },
  };

  @Output() showDetail = new EventEmitter();

  constructor(private cartService: CartService) {}

  add(product: Product) {
    this.cartService.addToCart(product);
  }

  details(product: Product) {
    this.showDetail.emit(product);
  }
}
