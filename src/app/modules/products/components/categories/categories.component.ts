import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/models/product.model';
import { Category } from '../../models/category.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  categoryName: Category['name'] = '';
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

      this.productService
        .getByCategory(id, this.limit, this.offset)
        .subscribe((data) => {
          this.products = data;
          this.categoryName = data[0].category.name;
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
