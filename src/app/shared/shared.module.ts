import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadButtonComponent } from './components/load-button/load-button .component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { FilterByDescriptionPipe } from './pipes/filter-by-description/filter-by-description.pipe';
import { FormValidatorComponent } from './validators/form.validator.component';

@NgModule({
  declarations: [
    FormValidatorComponent,
    ModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormValidatorComponent,
    ModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
