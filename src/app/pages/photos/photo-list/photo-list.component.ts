import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/services/user.service';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  constructor(
    private userService: userService,
    private activatedRoute: ActivatedRoute
  ) {}

  public photoList: PhotoModel[] = [];
  public userName = this.userService.getUserName();
  public filter: string = '';

  public ngOnInit(): void {
    this.photoList = this.activatedRoute.snapshot.data.photos;
  }

  public onFilter(event: any) {
    this.filter = event.target.value;
  }
}
