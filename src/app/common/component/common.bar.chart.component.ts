import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-common-bar-chart',
  templateUrl: '../templates/common.bar.chart.component.html',
  standalone: false,
})
export class CommonBarChartComponent implements OnChanges {
  @Input() chartType: ChartType = 'bar'; // Default chart type
  @Input() chartLabels: string[] = [];
  @Input() chartData: number[] = [];
  @Input() chartTitle: string = '';
  @Input() backgroundColors: string[] = ['rgba(54, 162, 235, 0.5)'];
  @Input() borderColors: string[] = ['rgba(54, 162, 235, 1)'];
  @Input() legendLabel: string = '';

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: this.chartTitle || undefined,
        font: { size: 18 },
        color: '#1E293B',
      },
    },
    bar: {
      datasets: {
        maxBarThickness: 80,
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
        label: this.legendLabel,
      },
    ],
  };

  ngOnChanges(): void {
    this.chartOptions = {
      // Update the chart title dynamically
      ...this.chartOptions,
      plugins: {
        ...this.chartOptions.plugins,
        title: {
          display: true,
          text: this.chartTitle || undefined, // Set the title dynamically
          font: { size: 18 },
          color: '#1E293B',
        },
      },
    };

    this.chartDataConfig = {
      labels: this.chartLabels,
      datasets: [
        {
          data: this.chartData,
          backgroundColor: this.backgroundColors,
          borderColor: this.borderColors,
          borderWidth: 2,
          label: this.legendLabel,
        },
      ],
    };
  }
}
