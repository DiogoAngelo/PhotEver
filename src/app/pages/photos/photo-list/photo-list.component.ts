import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
import { userService } from 'src/app/services/user.service';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  constructor(
    private userService: userService,
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  public photoList: PhotoModel[] = [];
  public userName = this.userService.getUserName();
  public filter: string = '';
  public debounceFilter: Subject<any> = new Subject<any>();
  public canLoadMore: boolean = true;
  public currentPage: number = 1;
  private loadPerClick: number = 12;

  public ngOnInit(): void {
    this.photoList = this.activatedRoute.snapshot.data.photos;
  }

  public loadMorePhotos() {
    this.photoService
      .getPhotoList(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        if (photos.length < this.loadPerClick) this.canLoadMore = false;
        this.photoList = this.photoList.concat(photos);
      });
  }
}
