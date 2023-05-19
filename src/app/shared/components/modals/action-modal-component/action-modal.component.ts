import { Component } from '@angular/core';
import { ModalActionService } from 'src/app/services/modal-action.service';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss'],
})
export class ActionModalComponent {
  constructor(private modalActionService: ModalActionService) {}
}
