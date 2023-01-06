import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'base-validator',
  templateUrl: './form.validator.component.html',
})
export class FormValidatorComponent {
  @Input() public control!: AbstractControl;
}
