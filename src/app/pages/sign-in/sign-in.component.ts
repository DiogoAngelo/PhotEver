import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  public signInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public signIn() {
    const userName = this.signInForm.controls.userName.value;
    const password = this.signInForm.controls.password.value;
    this.authService.signIn(userName, password).subscribe(
      (data) => {
        this.router.navigate(['/photo-list']);
      },
      (err) => console.log(err.error.message)
    );
  }
}
