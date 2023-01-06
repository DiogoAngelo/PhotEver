import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  public signUpForm!: FormGroup;

  public ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(18),
        ],
      ],
      password: ['', Validators.required],
    });
  }
}
