import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../modules/products/models/category.model';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../modules/products/models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = environment.API_URL;

  categories = new BehaviorSubject<Category[]>([]);
  categories$ = this.categories.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(`${this.url}/api/v1/categories`).pipe(
      map((data) => {
        const slicedData = data.slice(0, 4);
        this.categories.next(slicedData);
        return slicedData;
      })
    );
  }

  get(id: Category['id']) {
    return this.http.get<Product[]>(`${this.url}/api/v1/categories/id`);
  }
}
