import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private modalService: ModalService
  ) {}

  public ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public signIn() {
    const userName = this.signInForm.controls.userName.value;
    const password = this.signInForm.controls.password.value;
    this.authService.signIn(userName, password).subscribe(
      () => {
        this.router.navigate(['/photo-list', userName]);
      },
      (err) => {
        this.modalService.sendModalContent('Login failed', err.error?.message);
        this.signInForm.controls.password.reset();
      }
    );
  }
}
