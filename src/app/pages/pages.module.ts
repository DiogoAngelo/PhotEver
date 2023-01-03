import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PhotoListComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PhotoListComponent,
  ],
})
export class PagesModule {}
