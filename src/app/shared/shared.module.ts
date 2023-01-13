import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { FilterByDescriptionPipe } from './pipes/filter-by-description/filter-by-description.pipe';
import { FormValidatorComponent } from './validators/form.validator.component';

@NgModule({
  declarations: [
    FormValidatorComponent,
    ModalComponent,
    FilterByDescriptionPipe,
  ],
  imports: [CommonModule],
  exports: [FormValidatorComponent, ModalComponent, FilterByDescriptionPipe],
})
export class SharedModule {}
