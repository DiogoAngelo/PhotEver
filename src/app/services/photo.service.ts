import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getPhotoList(
    userName: string,
    page: number | string
  ): Observable<PhotoModel[]> {
    const params = new HttpParams().append('page', page);
    return this.http.get<PhotoModel[]>(
      `${environment.URL}/${userName}/photos`,
      { params }
    );
  }

  public upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post(`${environment.URL}/photos/upload`, formData);
  }
}
