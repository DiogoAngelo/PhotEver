import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { userService } from './user.service';
import { NewUser, User } from '../shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: userService) {}

  public signIn(userName: string, password: string): Observable<object> {
    return this.http
      .post(
        `${environment.URL}/user/login`,
        {
          userName,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((resp) => {
          const token = resp.headers.get('x-access-token') as string;
          this.userService.setToken(token);
        })
      );
  }

  public signUp(newUser: NewUser): Observable<object> {
    return this.http.post(`${environment.URL}/user/signup`, newUser);
  }

  public checkUserExistence(userName: string): Observable<Object> {
    return this.http.get(`${environment.URL}/user/exists/${userName}`);
  }
}
