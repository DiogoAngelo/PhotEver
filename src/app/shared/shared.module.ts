import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadButtonComponent } from './components/load-button/load-button .component';
import { ModalNotificationComponent } from './components/modals/modal-notification/modal-notification.component';
import { SearchComponent } from './components/search/search.component';
import { FocusOnHoverDirective } from './directives/focus-on-hover.directive';
import { FilterByDescriptionPipe } from './pipes/filter-by-description/filter-by-description.pipe';
import { FormValidatorComponent } from './validators/form-validator.component';
import { ModalActionComponent } from './components/modals/modal-action-component/modal-action.component';

@NgModule({
  declarations: [
    FormValidatorComponent,
    ModalNotificationComponent,
    ModalActionComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
    FocusOnHoverDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormValidatorComponent,
    ModalNotificationComponent,
    ModalActionComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
    FocusOnHoverDirective,
  ],
})
export class SharedModule {}
