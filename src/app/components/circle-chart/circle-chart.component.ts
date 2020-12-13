import { Component, OnInit, Input } from '@angular/core';

/**
 * This class represents the lazy loaded CircleChartComponent.
 */
@Component({
  selector: 'app-sd-circle-chart',
  templateUrl: 'circle-chart.component.html',
  styleUrls: ['circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {
  @Input() dataList: any[];
  @Input() color: '#fff';
  // doughnut Chart Options
  doughnutChartOptions = {
    responsive: false,
    aspectRatio: 1,
    cutoutPercentage: 85
  };
  // Doughnut
  donutColors = [];
  doughnutChartLabels = ['', ''];
  doughnutChartData = [];
  doughnutChartType = 'doughnut';

  constructor() {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.donutColors = [
      {
        backgroundColor: [
          this.color,
          '#e8e9f1',
        ]
      }
    ];

    this.doughnutChartData = [
      [this.dataList['currentValue'], this.dataList['leftValue']],
    ];
  }
}
