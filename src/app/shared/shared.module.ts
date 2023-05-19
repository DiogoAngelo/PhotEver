import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadButtonComponent } from './components/load-button/load-button .component';
import { NotificationModalComponent } from './components/modals/notification-modal/notification-modal.component';
import { SearchComponent } from './components/search/search.component';
import { FocusOnHoverDirective } from './directives/focus-on-hover.directive';
import { FilterByDescriptionPipe } from './pipes/filter-by-description/filter-by-description.pipe';
import { FormValidatorComponent } from './validators/form-validator.component';
import { ActionModalComponent } from './components/modals/action-modal-component/action-modal.component';

@NgModule({
  declarations: [
    FormValidatorComponent,
    NotificationModalComponent,
    ActionModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
    FocusOnHoverDirective,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormValidatorComponent,
    NotificationModalComponent,
    ActionModalComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
    FocusOnHoverDirective,
  ],
})
export class SharedModule {}
