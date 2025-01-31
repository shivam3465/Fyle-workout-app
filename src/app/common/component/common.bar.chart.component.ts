import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-common-chart',
  templateUrl: '../templates/common.bar.chart.component.html',
  standalone: false,
})
export class CommonBarChartComponent implements OnChanges {
  @Input() chartType: ChartType = 'bar'; // Default chart type
  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartTitle: string = 'Chart';
  @Input() backgroundColors: string[] = ['rgba(54, 162, 235, 0.5)'];
  @Input() borderColors: string[] = ['rgba(54, 162, 235, 1)'];

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' },
      title: {
        display: true,
        text: this.chartTitle,
        font: { size: 18 },
        color: '#1E293B',
      },
    },
  };

  public chartDataConfig: ChartConfiguration['data'] = {
    labels: this.chartLabels,
    datasets: [
      {
        data: this.chartData,
        backgroundColor: this.backgroundColors,
        borderColor: this.borderColors,
        borderWidth: 2,
      },
    ],
  };

  ngOnChanges(): void {
    this.chartDataConfig = {
      labels: this.chartLabels,
      datasets: [
        {
          data: this.chartData,
          backgroundColor: this.backgroundColors,
          borderColor: this.borderColors,
          borderWidth: 2,
        },
      ],
    };
  }
}
