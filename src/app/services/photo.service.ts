import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoModel } from '../shared/models/photo.model';
import { userService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient, private userService: userService) {}

  public getPhotoList(userName: string): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${environment.URL}/${userName}/photos`);
  }
}
