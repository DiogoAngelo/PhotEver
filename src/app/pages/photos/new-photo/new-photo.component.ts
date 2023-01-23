import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  templateUrl: './new-photo.component.html',
})
export class NewPhotoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private modalService: ModalService
  ) {}

  public photoForm!: FormGroup;
  public file!: File;
  public preview!: string;

  public ngOnInit(): void {
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
    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => {
        this.router.navigate(['']);
      },
      (err) => {
        this.modalService.sendModalContent('Upload Failed', err.error.message);
      }
    );
  }
}
