import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthToken } from '../models/auth.models';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.API_URL;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthToken>(`${this.url}/api/v1/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((token) => {
          this.tokenService.saveToken(token.access_token);
          this.userService.get().subscribe();
        })
      );
  }
}
