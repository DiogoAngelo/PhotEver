import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { FormValidatorComponent } from './validators/form.validator.component';

@NgModule({
  declarations: [FormValidatorComponent, ModalComponent],
  imports: [CommonModule],
  exports: [FormValidatorComponent, ModalComponent],
})
export class SharedModule {}
