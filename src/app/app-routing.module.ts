import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/errors/not-found.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './pages/home/home.component';
import { NewPhotoComponent } from './pages/photos/new-photo/new-photo.component';
import { PhotoListComponent } from './pages/photos/photo-list/photo-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PhotoListResolver } from './shared/resolver/photo-list.resolver';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SignInComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: 'photo-list/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: 'p/add',
    component: NewPhotoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
