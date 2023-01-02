import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, SignInComponent, SignUpComponent],
})
export class PagesModule {}
