import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsCreateEditAdminComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-create-edit-admin',
  templateUrl: 'modal-windows-create-edit-admin.component.html',
  styleUrls: ['modal-windows-create-edit-admin.component.scss']
})
export class ModalWindowsCreateEditAdminComponent implements OnInit {
  @Input() modalData = {
    name: '',
    itemData: null
  };

  @Output() clickCreateAdmin: EventEmitter<any> = new EventEmitter();
  @Output() clickApplyEdits: EventEmitter<any> = new EventEmitter();
  @Output() showTermsConditions: EventEmitter<any> = new EventEmitter();

  showUserError = false;
  showAgreeError = false;
  dataUser: any;

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataUser = {
      photoUrl: this.modalData['itemData']['data']['photoUrl'],
      name: this.modalData['itemData']['data']['employeeName'],
      email: this.modalData['itemData']['data']['email']
    };
  }

  /**
   * click Create
   */
  clickCreate() {
    if (this.modalData['itemData']['data']['employeeName'] === '') {
      this.showUserError = true;
    } else {
      this.showUserError = false;
    }

    if (this.modalData['itemData']['data']['agreeTermsAndCondition']) {
      this.showAgreeError = false;
    } else {
      this.showAgreeError = true;
    }

    if (!this.showUserError && !this.showAgreeError) {
      this.clickCreateAdmin.emit();
    }
  }

  /**
   * click Edit
   */
  clickEdit() {
    this.clickApplyEdits.emit();
  }

  /**
   * click Clear User
   */
  clickClearUser() {
    this.dataUser = {
      photoUrl: '',
      name: '',
      email: ''
    };
  }

  /**
   * select User
   * @param event selected user data
   */
  selectUser(event) {
    this.dataUser = event;
    this.modalData['itemData']['data']['photoUrl'] = this.dataUser['photoUrl'];
    this.modalData['itemData']['data']['employeeName'] = this.dataUser['name'];
    this.modalData['itemData']['data']['email'] = this.dataUser['email'];
  }

  /**
   * click Clear Permission
   */
  clickClearPermission() {
    this.modalData['itemData']['data']['admin'] = '';
    this.modalData['itemData']['data']['can'] = '';
    this.modalData['itemData']['data']['incidents'] = '';
  }

  /**
   * close Modal
   */
  closeModal() {
    this.modalData['name'] = '';
  }
}
