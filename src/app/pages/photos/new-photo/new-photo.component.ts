import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationModalService } from 'src/app/services/notification-modal.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  templateUrl: './new-photo.component.html',
})
export class NewPhotoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private modalService: NotificationModalService
  ) {}

  @ViewChild('openFileButton')
  public openFileButton!: ElementRef<HTMLInputElement>;

  public photoForm!: FormGroup;
  public file!: File;
  public preview!: string;

  public ngOnInit(): void {
    setTimeout(() => {
      this.openFileButton.nativeElement.click();
    });
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  public getFileFromInput(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => (this.preview = event.target?.result);
  }

  public upload() {
    const description = this.photoForm.controls.description.value;
    const allowComments = this.photoForm.controls.allowComments.value;

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', this.file);

    this.photoService.upload(formData).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (err) => {
        this.modalService.sendModalContent('Upload Failed', err.error.message);
      }
    );
  }
}
