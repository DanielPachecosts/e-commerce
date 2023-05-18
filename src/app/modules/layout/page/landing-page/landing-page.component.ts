import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Category } from 'src/app/modules/products/models/category.model';
import { Product } from 'src/app/modules/products/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  offset = 0;
  limit = 8;
  isOut = false

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.categoryService.getAll().subscribe();
    this.categoryService.categories$.subscribe((data) => {
      this.categories = data;
    });
    this.userService.get().subscribe()

  }

  getProducts() {
    this.productService
      .getAll(this.limit, this.offset)
      .subscribe((products) => {
        this.products = products;
      });
  }

  loadMore() {
    this.offset += this.limit;
    this.productService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
    });
  }

  

}
