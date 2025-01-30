import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutHomeComponent } from './component/workout.home.component';
import { WorkoutDetailComponent } from './component/workout.detail.component';
import { WorkoutUserListComponent } from './component/workout.user.list.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutHomeComponent,
  },
  {
    path: 'report',
    component: WorkoutUserListComponent,
  },
  {
    path: 'details',
    component: WorkoutDetailComponent,
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
