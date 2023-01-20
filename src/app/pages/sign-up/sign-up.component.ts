import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { checkUserExistenceValidatorService } from 'src/app/services/checkUserExistence.validator.service';
import { ModalService } from 'src/app/services/modal.service';
import { NewUser } from 'src/app/shared/models/user.model';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService,
    private checkUserName: checkUserExistenceValidatorService
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
        this.checkUserName.validateUser(),
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public signUp() {
    const newUser = this.signUpForm.value as NewUser;
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
