import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  public getToken() {
    return localStorage.getItem(KEY);
  }

  public hasToken() {
    return !!this.getToken();
  }

  public removeToken() {
    localStorage.removeItem(KEY);
  }
}
