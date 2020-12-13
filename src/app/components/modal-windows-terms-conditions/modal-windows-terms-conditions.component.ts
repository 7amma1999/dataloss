import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsTermsConditionsComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-terms-conditions',
  templateUrl: 'modal-windows-terms-conditions.component.html',
  styleUrls: ['modal-windows-terms-conditions.component.scss']
})
export class ModalWindowsTermsConditionsComponent {
  @Input() modalData = {
    name: '',
    itemData: null
  };
  @Input() isShownTermsConditions: boolean;

  @Output() clickTermsConditions: EventEmitter<boolean> = new EventEmitter();
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter();
}
