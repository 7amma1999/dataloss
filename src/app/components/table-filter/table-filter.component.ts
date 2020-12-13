import { Component, Input, EventEmitter, Output } from '@angular/core';
import { configuration } from '../../../config/configuration';

/**
 * This class represents the lazy loaded TableFilterComponent.
 */
@Component({
  selector: 'app-sd-table-filter',
  templateUrl: 'table-filter.component.html',
  styleUrls: ['table-filter.component.scss']
})
export class TableFilterComponent {
  @Input() tableType = ''; // 'admin-list', 'audit-logs', 'audit-logs-list', 'incident-list'
  @Input() userRole = '';

  @Output() changeFilter: EventEmitter<any> = new EventEmitter();

  permissionsAdmin = configuration.permissionsAdmin;
  statusAdmin = configuration.statusAdmin;
  statusIncident = configuration.statusIncident;
  typeIncident = configuration.typeIncident;
  regionIncident = configuration.regionIncident;

  showDate = false;
  showUser = false;
  showPermissionsAdmin = false;
  showStatusAdmin = false;
  showStatusIncident = false;
  showTypeIncident = false;
  showRegionIncident = false;

  tempUserData = {
    photoUrl: '',
    name: '',
    email: ''
  };

  adminFilter = {
    dateAdded: '',
    permissions: [],
    status: []
  };
  incidentFilter = {
    date: '',
    region: [],
    status: [],
    type: []
  };
  auditLogFilter = {
    date: '',
    accessControlOnly: false,
    incidentsOnly: false
  };
  auditLogListFilter = {
    date: '',
    user: {
      photoUrl: '',
      name: '',
      email: ''
    }
  };

  /**
   * clear Checkbox filter
   * @param optionList option List
   */
  clearCheckboxFilter(optionList) {
    optionList.forEach((item, index) => {
      item['selected'] = false;
    });
  }

  /**
   * clear User
   */
  clearUser() {
    this.tempUserData = {
      photoUrl: '',
      name: '',
      email: ''
    };
  }

  /**
   * select User
   * @param event selected User Data
   */
  selectUser(event) {
    this.tempUserData = event;
  }

  /**
   * click Save User
   */
  clickSaveUser() {
    this.auditLogListFilter['user'] = this.tempUserData;

    this.changeFilterValues();
  }

  /**
   * save Checkbox filter
   * @param filterItem filter Item
   * @param dataItem data Item
   * @param optionList option List
   */
  saveCheckboxFilter(filterItem, dataItem, optionList) {
    this[filterItem][dataItem] = [];
    optionList.forEach((item, index) => {
      if (item['selected']) {
        this[filterItem][dataItem].push(item['label']);
      }
    });

    this.changeFilterValues();
  }

  /**
   * change Filter Values
   */
  changeFilterValues() {
    switch (this.tableType) {
      case 'admin-list':
        this.changeFilter.emit(this.adminFilter);
        break;
      case 'audit-logs':
        this.changeFilter.emit(this.auditLogFilter);
        break;
      case 'audit-logs-list':
        this.changeFilter.emit(this.auditLogListFilter);
        break;
      case 'incident-list':
        this.changeFilter.emit(this.incidentFilter);
        break;
    }
  }
}
