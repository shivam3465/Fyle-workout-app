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
import { UtilService } from '../common/services/util.service';
import { WorkoutConfig } from '../common/constants/workout.config';

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
export class WorkoutModule {
  constructor() {
    const previousData = UtilService.getItem(WorkoutConfig.WORKOUT_LIST_KEY);

    //storing initial user data in local storage if not already stored
    if (!previousData) {
      UtilService.setItem(
        WorkoutConfig.WORKOUT_LIST_KEY,
        WorkoutConfig.INITIAL_USER_DATA
      );
    }
  }
}
