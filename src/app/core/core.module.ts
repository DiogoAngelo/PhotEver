import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './pages/errors/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  exports: [HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
