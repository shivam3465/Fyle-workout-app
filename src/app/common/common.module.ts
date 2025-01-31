import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';

import { CommonPaginationComponent } from './component/common.pagination.component';
import { FormsModule } from '@angular/forms';
import { CommonBarChartComponent } from './component/common.bar.chart.component';

@NgModule({
  declarations: [CommonPaginationComponent, CommonBarChartComponent],
  imports: [CommonModule, RouterModule, FormsModule, BaseChartDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CommonPaginationComponent, CommonBarChartComponent],
})
export class AppCommonModule {}
