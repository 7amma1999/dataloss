import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded StatusGraphComponent.
 */
@Component({
  selector: 'app-sd-status-graph',
  templateUrl: 'status-graph.component.html',
  styleUrls: ['status-graph.component.scss']
})
export class StatusGraphComponent {
  @Input() dataList: any[];
}
