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
  public ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  public getFileFromInput(event: any) {
    this.file = event.target?.files[0];
  }

  public upload() {
    const description = this.photoForm.controls.description.value;
    const allowComments = this.photoForm.controls.allowComments.value;
    this.photoService.upload(description, allowComments, this.file).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      (err) => {
        this.modalService.sendModalContent('Upload Failed', err.error.message);
        console.log(err);
      }
    );
  }
}
