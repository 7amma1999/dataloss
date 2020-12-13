import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded AdminStatusSummaryComponent.
 */
@Component({
  selector: 'app-sd-admin-status-summary',
  templateUrl: 'admin-status-summary.component.html',
  styleUrls: ['admin-status-summary.component.scss']
})
export class AdminStatusSummaryComponent {
  @Input() dataList: any[];
}
