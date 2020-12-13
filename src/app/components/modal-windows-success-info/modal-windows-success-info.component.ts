import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsSuccessInfoComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-success-info',
  templateUrl: 'modal-windows-success-info.component.html',
  styleUrls: ['modal-windows-success-info.component.scss']
})
export class ModalWindowsSuccessInfoComponent {
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
