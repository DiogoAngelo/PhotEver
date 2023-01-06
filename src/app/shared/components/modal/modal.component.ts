import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  public getModalContent() {
    this.modalService.getModalContent().subscribe((data) => {
      console.log(data?.title, data?.message);
    });
  }

  public ngOnInit(): void {
    this.getModalContent();
  }
}
