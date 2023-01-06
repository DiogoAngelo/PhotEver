import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { User } from '../shared/models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  public userSubject = new BehaviorSubject<any>(null);
  public userName!: string;

  constructor(
    private tokenService: TokenService,
    private jwtHelper: JwtHelperService
  ) {
    this.tokenService.hasToken() && this.decodeTokenAndNotify();
  }

  public setToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeTokenAndNotify();
  }

  public decodeTokenAndNotify() {
    const token = this.tokenService.getToken() as string;
    const user = this.jwtHelper.decodeToken(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  public getUser() {
    return this.userSubject.asObservable();
  }

  public getUserName() {
    return this.userName;
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
}
