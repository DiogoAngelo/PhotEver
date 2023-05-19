import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoModel } from '../shared/models/photo.model';
import { userService } from './user.service';
import { PhotoCommentModel } from '../shared/models/photo-comment.model';

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

  public upload(formData: FormData) {
    return this.http.post(`${environment.URL}/photos/upload`, formData);
  }

  public getPhotoById(photoId: string | number) {
    return this.http.get<PhotoModel>(`${environment.URL}/photos/${photoId}`);
  }

  public getComments(photoId: string | number) {
    return this.http.get<PhotoCommentModel[]>(
      `${environment.URL}/photos/${photoId}/comments`
    );
  }

  public postComment(photoId: string | number, commentText: string) {
    return this.http.post(`${environment.URL}/photos/${photoId}/comments`, {
      commentText,
    });
  }

  public removePhoto(photoId: string | number) {
    return this.http.delete(`${environment.URL}/photos/${photoId}`);
  }
}
