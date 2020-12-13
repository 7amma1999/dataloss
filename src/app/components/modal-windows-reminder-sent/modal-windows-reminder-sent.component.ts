import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded HeaderComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-reminder-sent',
  templateUrl: 'modal-windows-reminder-sent.component.html',
  styleUrls: ['modal-windows-reminder-sent.component.scss']
})
export class ModalWindowsReminderSentComponent {
  @Input() modalData = {
    name: '',
    itemData: null
  };

  /**
   * close Modal
   */
  closeModal() {
    this.modalData['name'] = '';
  }
}
