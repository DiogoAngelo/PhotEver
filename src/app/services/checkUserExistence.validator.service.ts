import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class checkUserExistenceValidatorService {
  constructor(private authService: AuthService) {}

  public validateUser() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) => this.authService.checkUserExistence(userName))
        )
        .pipe(map((result) => (result ? { userAlreadyTaken: true } : null)))
        .pipe(first());
    };
  }
}
