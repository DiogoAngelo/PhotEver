import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './components/load-button/load-button .component';
import { ModalComponent } from './components/modal/modal.component';
import { FilterByDescriptionPipe } from './pipes/filter-by-description/filter-by-description.pipe';
import { FormValidatorComponent } from './validators/form.validator.component';

@NgModule({
  declarations: [
    FormValidatorComponent,
    ModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormValidatorComponent,
    ModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
  ],
})
export class SharedModule {}
