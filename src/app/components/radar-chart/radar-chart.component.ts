import { Component, AfterViewInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

/**
 * This class represents the header bar component.
 */
@Component({
  selector: 'app-sd-radar-chart',
  templateUrl: 'radar-chart.component.html',
  styleUrls: ['radar-chart.component.scss'],
})
export class RadarChartComponent implements AfterViewInit {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() dataList: any[] = null;
  errorMessage: string;
  chartDataList: any[] = [];

  ngAfterViewInit() {
    if (this.dataList) {
      this.getChartData();
    }
  }

  /**
   * Handle the ChartDataListService observable
   */
  getChartData() {
    this.createChart();
  }

  /**
   * create the chart
   */
  createChart() {
    const element = this.chartContainer.nativeElement;

    const w = 210;
    const h = 210;
    const vizPadding = {
      top: 8,
      right: 8,
      bottom: 8,
      left: 8
    };
    const ruleColor = '#ccc';
    let i;
    let series;
    let hours;
    let minVal;
    let maxVal;
    let radius;
    let radiusLength;
    const circleRadius = [115 / 245 * w, 69 / 245 * w, 23 / 245 * w];
    const circleColor = ['#edf7fc', '#edf7fc', '#edf7fc'];

    const data = this.dataList;
    const loadData = () => {
      const randomFromTo = function randomFromToFunc(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      };

      series = [
        []
      ];

      hours = [0, 1, 2];
      // const array = [241, 503, 36];
      for (i = 0; i < 3; i += 1) {
        series[0][i] = data[i]['value'];
      }
      let temp = 0;
      temp = series[0][1];
      series[0][1] = series[0][0];
      series[0][0] = temp;
      const mergedArr = series[0].concat(series[1]);

      minVal = d3.min(mergedArr);
      maxVal = d3.max(mergedArr);
      // give 25% of range as buffer to top
      maxVal = maxVal + ((maxVal - minVal) * 0.25);
      minVal = 0;

      // to complete the radial lines
      for (i = 0; i < series.length; i += 1) {
        series[i].push(series[i][0]);
      }
    };

    let vizBody;
    const buildBase = () => {
      const viz = d3.select(element)
          .append('svg:svg')
          .attr('width', w)
          .attr('height', h)
          .attr('class', 'vizSvg');

      viz.append('svg:rect')
          .attr('id', 'axis-separator')
          .attr('x', 0)
          .attr('y', 0)
          .attr('height', 0)
          .attr('width', 0)
          .attr('height', 0);

      vizBody = viz.append('svg:g')
          .attr('id', 'body');
    };

    const setScales = () => {
      let heightCircleConstraint;
      let widthCircleConstraint;
      let circleConstraint;
      let centerXPos;
      let centerYPos;

      // need a circle so find constraining dimension
      heightCircleConstraint = h - vizPadding.top - vizPadding.bottom;
      widthCircleConstraint = w - vizPadding.left - vizPadding.right;
      circleConstraint = d3.min([
        heightCircleConstraint, widthCircleConstraint]);

      radius = d3.scale.linear().domain([minVal, maxVal])
        .range([0, (circleConstraint / 2)]);
      radiusLength = radius(maxVal);

      // attach everything to the group that is centered around middle
      centerXPos = widthCircleConstraint / 2 + vizPadding.left;
      centerYPos = heightCircleConstraint / 2 + vizPadding.top;

      vizBody.attr('transform',
        'translate(' + centerXPos + ', ' + centerYPos + ')');
    };

    const addAxes = () => {
      let circleAxes;
      let lineAxes;
      const radialTicks = radius.ticks(5);

      vizBody.selectAll('.circle-ticks').remove();
      vizBody.selectAll('.line-ticks').remove();

      circleAxes = vizBody.selectAll('.circle-ticks')
        .data(radialTicks)
        .enter().append('svg:g')
        .attr('class', 'circle-ticks');

      for (let j = 0; j < 6; j++) {
        if (j > 0) {
          circleAxes.append('svg:circle')
            .attr('r', circleRadius[j])
            .attr('fill', circleColor[j])
            .attr('class', 'circle')
            .attr('stroke', '#e1e1e1');
        } else {
          circleAxes.append('svg:circle')
            .attr('r', circleRadius[j])
            .attr('fill', circleColor[j])
            .attr('class', 'circle');
        }
      }

      lineAxes = vizBody.selectAll('.line-ticks')
          .data(hours)
          .enter().append('svg:g')
          .attr('transform', (d, index) => {
            return 'rotate(' + ((index / hours.length * 360) - 90) +
                   ')translate(' + radius(maxVal) + ')';
          })
          .attr('class', 'line-ticks')
          .style('stroke', ruleColor)
          .attr('stroke-width', '1px');

      lineAxes.append('svg:line')
          .attr('x2', -1 * radius(maxVal))
          .attr('class', 'line-style')
          .style('stroke', '#e8e9f1')
          .style('fill', 'none');
      lineAxes.append('svg:circle')
          .attr('r', 4)
          .attr('fill', '#edf7fc'); // dot color
    };

    const draw = () => {
      let groups;
      let lines;

      groups = vizBody.selectAll('.series')
          .data(series);
      groups.enter().append('svg:g')
          .attr('class', 'series')
          .attr('stroke-width', '10px')
          .style('fill', '#84b9da')
          .style('stroke', '#4784bc');
      groups.exit().remove();

      lines = groups.append('svg:path')
          .attr('class', 'line')
          .attr('d', d3.svg.line.radial()
              .radius((d) => {
                  return 0;
              })
              .angle((d, index) => {
                  if (index === 3) {
                      index = 0;
                  } // close the line
                  return (index / 3) * 2 * Math.PI;
              }))
          .style('stroke-width', 1)
          .style('fill', '#a1d4ee')
          .style('fill-opacity', '0.8');

      lines.attr('d', d3.svg.line.radial()
          .radius((d) => {
              return radius(d);
          })
          .angle((d, index) => {
              if (index === 3) {
                  index = 0;
              } // close the line
              return (index / 3) * 2 * Math.PI;
          }));
    };
    const loadViz = () => {
      loadData();
      buildBase();
      setScales();
      addAxes();
      draw();
    };
    loadViz();
  }
}
