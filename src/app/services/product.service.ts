import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https:/api.escuelajs.co/api/v1/products';
  products = new BehaviorSubject<Product[]>([]);
  products$ = this.products.asObservable();

  constructor(private http: HttpClient) {}

  getAll(limit: number, offset: number) {
    let params = new HttpParams();
    params = params.set('offset', offset);
    params = params.set('limit', limit);

    return this.http
      .get<Product[]>(this.url, { params })
      .pipe(tap((products) => this.products.next(products)));
  }

  getByCategory(id: Category['id'], limit: number, offset: number) {
    let params = new HttpParams();
    params = params.set('offset', offset);
    params = params.set('limit', limit);
    return this.http.get<Product[]>(`${this.url}/?categoryId=${id}`, {
      params,
    });
  }
}
