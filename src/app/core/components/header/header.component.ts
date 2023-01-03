import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private userService: userService) {}

  public ngOnInit(): void {}
}
