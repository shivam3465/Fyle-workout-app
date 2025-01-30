import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutHomeComponent } from './component/workout.home.component';
import { routing } from './workout.routes';

@NgModule({
  declarations: [WorkoutHomeComponent],
  imports: [routing, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class WorkoutModule {}
