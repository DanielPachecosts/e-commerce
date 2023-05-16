import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, CartProduct } from '../modules/products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<CartProduct[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  addToCart(product: Product) {
    const currentCart = this.cart.getValue();
    const productWithQty = { ...product, qty: 1 };
    const existingProductIndex = currentCart.findIndex(
      (item) => item.id === productWithQty.id
    );

    if (existingProductIndex !== -1) {
      currentCart[existingProductIndex].qty += 1;
    } else {
      currentCart.push(productWithQty);
    }
    this.cart.next(currentCart);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  updateProductQty(products: CartProduct[]) {
    const currentCart = products;
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.cart.next(currentCart);
  }

  removeProduct(product: CartProduct) {
    const cart = this.cart.getValue();
    const currentCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    this.cart.next(currentCart);
  }

  cleanStorage() {
    localStorage.clear()
  }
}
