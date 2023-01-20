import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor(private userService: userService) {}

  public user$!: Observable<User>;

  public ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
