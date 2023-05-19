import { Component, OnInit } from '@angular/core';
import { NotificationModalService } from 'src/app/services/notification-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
})
export class NotificationModalComponent implements OnInit {
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
    });
  }

  public closeModal() {
    this.canOpenModal = false;
  }
}
