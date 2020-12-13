import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded TopBannerComponent.
 */
@Component({
  selector: 'app-sd-top-banner',
  templateUrl: 'top-banner.component.html',
  styleUrls: ['top-banner.component.scss']
})
export class TopBannerComponent {
  @Input() dataList: any[];
  @Input() theme: string;
}
