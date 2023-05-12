import { Component, OnInit } from '@angular/core';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { CartProduct, Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  faCartShopping = faCartShopping;

  totalQuantityInCart = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$
      .pipe(
        map((products: CartProduct[]) => products.map((product) => product.qty))
      )
      .subscribe((data) => {
        this.totalQuantityInCart = data.reduce((sum, qty) => sum + qty, 0);
        console.log('cart component', this.totalQuantityInCart);
        
      });
  }
}
