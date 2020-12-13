import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This class represents the lazy loaded TableHeaderComponent.
 */
@Component({
  selector: 'app-sd-table-header',
  templateUrl: 'table-header.component.html',
  styleUrls: ['table-header.component.scss']
})
export class TableHeaderComponent {
  @Input() tableType = ''; // 'admin-list', 'audit-logs', 'audit-logs-list', 'incident-list'
  @Input() userRole = '';

  @Output() clickNew: EventEmitter<any> = new EventEmitter();
  @Output() changSearch: EventEmitter<any> = new EventEmitter();

  searchText = '';
}
