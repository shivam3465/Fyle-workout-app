import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutModule } from '../workout/workout.module';

//define all routes for the modules or components
const routes: Routes = [
  {
    path: '',
    loadChildren: () => WorkoutModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class MainRouting {}
