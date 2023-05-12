import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './photo-details.component.html',
  selector: 'base-photo-details',
})
export class PhotoDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  public photoId: number | string = this.activatedRoute.snapshot.params.photoId;

  public ngOnInit(): void {
    console.log(this.photoId);
  }
}
