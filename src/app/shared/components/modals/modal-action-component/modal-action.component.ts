import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalActionService } from 'src/app/services/modal-action.service';

@Component({
  selector: 'app-action-modal',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.scss'],
})
export class ModalActionComponent {
  constructor(private modalActionService: ModalActionService) {}

  @Output() public onConfirmAction = new EventEmitter<any>();
  @Input() public confirmActionTitle: string = 'Confirm';

  public title!: string;
  public message!: string;
  public canOpenModal: boolean = false;

  public ngOnInit(): void {
    this.getModalContent();
  }

  private getModalContent() {
    this.modalActionService.getModalContent().subscribe((data) => {
      this.title = data?.title;
      this.message = data?.message;
      this.canOpenModal = true;
    });
  }

  public closeModal() {
    this.canOpenModal = false;
  }

  public confirmAction(): void {
    this.onConfirmAction.emit();
  }
}
