import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const CLOUD = `${environment.URL}/imgs/`;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  private _url!: string;

  @Input() public description!: string;

  @Input() public set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = `${CLOUD}${url}`;
    } else {
      this._url = url;
    }
  }

  public get url() {
    return this._url;
  }
}
