import { Component, OnInit } from '@angular/core';

import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  offset = 0;
  limit = 8;

  constructor(private categoryService: CategoryService, private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.categoryService.getAll().subscribe();
    this.categoryService.categories$.subscribe((data) => {
      this.categories = data;
    });
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
