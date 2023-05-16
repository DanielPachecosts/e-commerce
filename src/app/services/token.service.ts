import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';


@Injectable({
  providedIn: 'root',
})
export class TokenService {
  saveToken(token: string) {
    setCookie('smart-commerce', token, { expires: 7, path: '/' });
  }

  getToken() {
    return getCookie('smart-commerce');
  }

  removeToken() {
    removeCookie('smart-commerce');
  }
}
