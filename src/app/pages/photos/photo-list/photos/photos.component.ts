import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'base-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent implements OnChanges {
  @Input() public photos!: PhotoModel[];
  public rows: any[] = [];

  public ngOnChanges(change: SimpleChanges): void {
    if (change.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  public groupColumns(photos: PhotoModel[]): any {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
