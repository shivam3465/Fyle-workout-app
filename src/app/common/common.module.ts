import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonPaginationComponent } from './component/common.pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonPaginationComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CommonPaginationComponent],
})
export class AppCommonModule {}
