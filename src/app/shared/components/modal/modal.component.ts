import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

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
