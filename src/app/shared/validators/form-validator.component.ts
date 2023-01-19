import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'base-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss'],
})
export class FormValidatorComponent {
  @Input() public control!: AbstractControl;
}
