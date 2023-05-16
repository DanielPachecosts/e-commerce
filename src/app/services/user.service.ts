import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { environment } from 'src/environments/environment';
import { checkToken } from '../interceptors/token.interceptor';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.API_URL;
  user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get<User>(`${this.url}/api/v1/auth/profile`, {
        context: checkToken(),
      })
      .pipe(
        tap((data) => {
          this.user.next(data);
        })
      );
  }
}
