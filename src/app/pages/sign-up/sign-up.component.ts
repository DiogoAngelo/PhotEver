import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService
  ) {}
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

  public signUp() {
    const newUser = this.signUpForm.value;
    this.authService.signUp(newUser).subscribe(
      () => {
        this.modalService.sendModalContent(
          'New user created',
          'Now you can sign in and upload your photos. Explore our best PhotEver'
        );
        this.router.navigate(['/']);
      },
      (err) => console.log(err)
    );
  }
}
