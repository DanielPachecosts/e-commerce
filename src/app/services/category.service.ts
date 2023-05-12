import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'https://api.escuelajs.co/api/v1/categories';

  categories = new BehaviorSubject<Category[]>([]);
  categories$ = this.categories.asObservable();

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Category[]>(this.url).pipe(
      map((data) => {
        const slicedData = data.slice(0, 4);
        this.categories.next(slicedData)
        return slicedData
      })
    );
  }

  get(id: Category['id']) {
    return this.http.get<Product[]>(`${this.url}/id`)
  }
}
