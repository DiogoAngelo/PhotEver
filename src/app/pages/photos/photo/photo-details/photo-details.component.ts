import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
import { PhotoCommentModel } from 'src/app/shared/models/photo-comment.model';
import { PhotoModel } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'base-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  public photoId: number | string = this.activatedRoute.snapshot.params.photoId;
  public photoDetails$!: Observable<PhotoModel>;
  public photoComment$!: Observable<PhotoCommentModel[]>;
  public form!: FormGroup;

  public ngOnInit(): void {
    this.photoDetails$ = this.photoService.getPhotoById(this.photoId);
    this.photoComment$ = this.photoService.getComments(this.photoId);

    this.form = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  public save() {
    this.photoComment$ = this.photoService
      .postComment(this.photoId, this.form.controls.comment.value)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => this.form.reset()));
  }
}
