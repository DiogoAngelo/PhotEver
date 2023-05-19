import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalContent } from '../shared/models/modal-content.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationModalService {
  constructor() {}

  private alertSubject: Subject<ModalContent> = new Subject<ModalContent>();

  public sendModalContent(title: string, message: string) {
    this.alertSubject.next(new ModalContent(title, message));
    // this.alertSubject.next({ title, message } as ModalContent);
  }

  public getModalContent() {
    return this.alertSubject.asObservable();
  }
}
