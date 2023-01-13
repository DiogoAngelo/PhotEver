import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { userService } from 'src/app/services/user.service';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit, OnDestroy {
  constructor(
    private userService: userService,
    private activatedRoute: ActivatedRoute
  ) {}

  public photoList: PhotoModel[] = [];
  public userName = this.userService.getUserName();
  public filter: string = '';
  public debounceFilter: Subject<any> = new Subject<any>();

  public ngOnInit(): void {
    this.photoList = this.activatedRoute.snapshot.data.photos;

    this.debounceFilter.pipe(debounceTime(300)).subscribe((filteredText) => {
      this.filter = filteredText.target.value;
    });
  }

  public ngOnDestroy(): void {
    this.debounceFilter.unsubscribe();
  }
}
