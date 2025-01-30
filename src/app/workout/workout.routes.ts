import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutHomeComponent } from './component/workout.home.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutHomeComponent,
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
