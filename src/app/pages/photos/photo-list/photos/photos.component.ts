import { Component, Input } from '@angular/core';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'base-photos',
  templateUrl: './photos.component.html',
})
export class PhotosComponent {
  @Input() public photos!: PhotoModel[];
}
