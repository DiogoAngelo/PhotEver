import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'base-load-button',
  templateUrl: './load-button.component.html',
})
export class LoadButtonComponent {
  constructor(
    private photoService: PhotoService,
    private userService: userService
  ) {}

  @Input() public canLoadMore!: boolean;
  @Output() public onLoad = new EventEmitter<void>();
}
