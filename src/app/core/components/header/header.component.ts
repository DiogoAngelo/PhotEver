import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public user$!: Observable<User>;

  constructor(private userService: userService, private router: Router) {}

  public ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
