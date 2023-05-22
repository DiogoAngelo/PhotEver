import { Component, OnInit } from '@angular/core';
import { NotificationModalService } from 'src/app/services/notification-modal.service';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.scss'],
})
export class ModalNotificationComponent implements OnInit {
  constructor(private modalService: NotificationModalService) {}

  public title!: string;
  public message!: string;
  public canOpenModal: boolean = false;

  public ngOnInit(): void {
    this.getModalContent();
  }

  private getModalContent() {
    this.modalService.getModalContent().subscribe((data) => {
      this.title = data?.title;
      this.message = data?.message;
      this.canOpenModal = true;
      setTimeout(() => {
        this.closeModal();
      }, 3000);
    });
  }

  public closeModal() {
    this.canOpenModal = false;
  }
}
