import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/modules/products/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  numbers: number[] = [];
  qty = 1;
  subtotal = 0;
  tax = 0;
  orderTotal = 0;
  products: CartProduct[] = [];

  constructor(private cartService: CartService) {}

  changeQty() {
    this.cartService.updateProductQty(this.products);
    console.log(this.products);

    this.getBill();
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      this.products = data;
    });

    for (let i = 1; i <= 8; i++) {
      this.numbers.push(i);
    }
    this.getBill();
  }

  getBill() {
    this.subtotal = this.products.reduce(
      (sum, product) => sum + product.price * product.qty,
      0
    );
    this.tax = this.subtotal * 0.12;
    this.orderTotal = this.subtotal + this.tax;
  }

  removeProduct(product: CartProduct) {
    this.cartService.removeProduct(product);
    this.getBill();
  }
}
