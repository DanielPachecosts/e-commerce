import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  products: Product[] = [];
  categoryName: Category['name'] = ''
  limit = 8;
  offset = 0;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.productService.getByCategory(id, this.limit, this.offset).subscribe((data) => {
        this.products = data;
        this.categoryName = data[0].category.name
        this.offset += this.limit;
      });
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.productService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
    });
  }
}
