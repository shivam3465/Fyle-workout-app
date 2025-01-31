import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { WorkoutHomeComponent } from './component/workout.home.component';
import { routing } from './workout.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkoutApiServices } from './services/workout.api.services';
import { WorkoutUserListComponent } from './component/workout.user.list.component';
import { WorkoutDetailComponent } from './component/workout.detail.component';
import { AppCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    WorkoutHomeComponent,
    WorkoutUserListComponent,
    WorkoutDetailComponent,
  ],
  imports: [
    routing,
    CommonModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [WorkoutApiServices],
  exports: [],
})
export class WorkoutModule {}
