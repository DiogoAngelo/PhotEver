import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { userService } from 'src/app/services/user.service';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  constructor(
    private userService: userService,
    private photoService: PhotoService
  ) {}

  public photoList: PhotoModel[] = [];
  public userName = this.userService.getUserName();
  public filter: string = '';

  public ngOnInit(): void {
    this.photoService.getPhotoList(this.userName).subscribe((data) => {
      this.photoList = data;
    });
  }

  public onFilter(event: any) {
    this.filter = event.target.value;
  }
}
