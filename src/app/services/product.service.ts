import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { Category } from '../models/category.model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.API_URL;
  products = new BehaviorSubject<Product[]>([]);
  products$ = this.products.asObservable();

  constructor(private http: HttpClient) {}

  getAll(limit: number, offset: number) {
    let params = new HttpParams();
    params = params.set('offset', offset);
    params = params.set('limit', limit);

    return this.http
      .get<Product[]>(`${this.url}/api/v1/products`, { params })
      .pipe(tap((products) => this.products.next(products)));
  }

  getByCategory(id: Category['id'], limit: number, offset: number) {
    let params = new HttpParams();
    params = params.set('offset', offset);
    params = params.set('limit', limit);
    return this.http.get<Product[]>(`${this.url}/api/v1/products/?categoryId=${id}`, {
      params,
    });
  }
}
