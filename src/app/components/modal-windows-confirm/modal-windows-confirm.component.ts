import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsConfirmComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-confirm',
  templateUrl: 'modal-windows-confirm.component.html',
  styleUrls: ['modal-windows-confirm.component.scss']
})
export class ModalWindowsConfirmComponent {
  @Input() modalData = {
    name: '',
    itemData: null
  };

  @Output() clickConfirm: EventEmitter<any> = new EventEmitter();

  /**
   * close Modal
   */
  closeModal() {
    this.modalData['name'] = '';
  }
}
