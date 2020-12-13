import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded ModalWindowsReassignIncidentComponent.
 */
@Component({
  selector: 'app-sd-modal-windows-reassign-incident',
  templateUrl: 'modal-windows-reassign-incident.component.html',
  styleUrls: ['modal-windows-reassign-incident.component.scss']
})
export class ModalWindowsReassignIncidentComponent implements OnInit {
  @Input() modalData = {
    name: '',
    itemData: null
  };

  @Output() clickFinishReassignment: EventEmitter<string> = new EventEmitter();

  showUserError = false;
  dataUser: any;

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataUser = {
      photoUrl: this.modalData['itemData']['employeeParticulars']['photoUrl'],
      name: this.modalData['itemData']['employeeParticulars']['name'],
      email: this.modalData['itemData']['employeeParticulars']['email']
    };
  }

  /**
   * select User
   * @param event selected user data
   */
  selectUser(event) {
    this.dataUser = event;
    this.modalData['itemData']['employeeParticulars']['photoUrl'] = this.dataUser['photoUrl'];
    this.modalData['itemData']['employeeParticulars']['name'] = this.dataUser['name'];
    this.modalData['itemData']['employeeParticulars']['email'] = this.dataUser['email'];
  }

  /**
   * click Finish
   */
  clickFinish() {
    if (this.modalData['itemData']['employeeParticulars']['name'] === '') {
      this.showUserError = true;
    } else {
      this.showUserError = false;
      this.clickFinishReassignment.emit();
    }
  }

  /**
   * close Modal
   */
  closeModal() {
    this.modalData['name'] = '';
  }
}
