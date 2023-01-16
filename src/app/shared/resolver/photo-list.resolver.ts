import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>> {
  constructor(private photoService: PhotoService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userName = route.params.userName;
    const initialPage = 1;
    return this.photoService.getPhotoList(userName, initialPage);
  }
}
