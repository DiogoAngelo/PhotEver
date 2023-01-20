import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NewPhotoComponent } from './photos/new-photo/new-photo.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotosComponent } from './photos/photo-list/photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PhotoListComponent,
    PhotoComponent,
    PhotosComponent,
    NewPhotoComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  exports: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PhotoListComponent,
    PhotosComponent,
    NewPhotoComponent,
  ],
})
export class PagesModule {}
