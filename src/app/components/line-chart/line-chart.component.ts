import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

/**
 * This class represents the lazy loaded LineChartComponent.
 */
@Component({
  selector: 'app-sd-line-chart',
  templateUrl: 'line-chart.component.html',
  styleUrls: ['line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() dataList: any[];
  @Input() label: string;
  @Input() theme: string;
  @Input() totalValue: number;
  chartLables: any[] = [];
  chartValues: any[] = [
    { data: [], label: '' }
  ];
  // line Chart Options
  lineChartOptions = {
    responsive: false,
    aspectRatio: 3,
    elements: {
      point:
      {
        radius: 2,
        hoverRadius: 5,
        hoverBorderWidth: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis-0',
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            fontColor: 'rgba(255, 255, 255, 0.5)',
            fontSize: 12,
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-0',
          gridLines: {
            drawBorder: false,
          },
          display: false
        },
      ]
    },
    tooltips: {
      backgroundColor: '#fff',
      bodyFontColor: '#58595b',
      displayColors: false,
      callbacks: {
        title: () => {},
        label: (tooltipItem, data) => {
          const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          return  '+' + tooltipItem.yLabel + '%';
        }
      }
    }
  };
  // line Chart Colors
  public lineChartColors: Color[] = [
    {
      borderColor: '#fff',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  ];
  // line Chart Legend
  public lineChartLegend = false;
  // line Chart Type
  public lineChartType = 'line';

  constructor() {}

  /**
   * OnInit
   */
  ngOnInit() {
    this.dataList.forEach((item, index) => {
       this.chartLables.push(item['month']);
       this.chartValues[0]['data'].push(item['percentage']);
    });
  }
}
