import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded TotalDLPAdminsComponent.
 */
@Component({
  selector: 'app-sd-total-dlp-admins',
  templateUrl: 'total-dlp-admins.component.html',
  styleUrls: ['total-dlp-admins.component.scss']
})
export class TotalDLPAdminsComponent {
  @Input() dataList: any[];
}
