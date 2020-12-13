import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded ViaRegionComponent.
 */
@Component({
  selector: 'app-sd-via-region',
  templateUrl: 'via-region.component.html',
  styleUrls: ['via-region.component.scss']
})
export class ViaRegionComponent implements OnInit {
  @Input() dataList: any[];
  totalValues = 0;

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataList.forEach((item, index) => {
      this.totalValues += item['number'];
    });
  }
}
