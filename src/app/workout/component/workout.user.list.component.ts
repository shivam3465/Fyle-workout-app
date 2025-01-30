import { WorkoutApiServices } from './../services/workout.api.services';
import { Component } from '@angular/core';
import { UserWorkoutListDataModel } from '../model/workout.list.model';
import { FormattedWorkoutListModel } from '../model/workout.model';

@Component({
  selector: 'app-workout-user-list',
  templateUrl: '../template/workout.user.list.component.html',
})
export class WorkoutUserListComponent {
  tableColumnHeaders: string[] = [
    'Name',
    'Workout',
    'No. of Workout',
    'Total Workout Minutes',
  ];

  userWorkoutData!: UserWorkoutListDataModel[];
  formattedWorkoutList!: FormattedWorkoutListModel[];

  constructor(private workoutApiServices: WorkoutApiServices) {}

  formatUserWorkoutData() {
    this.formattedWorkoutList = this.userWorkoutData.map((user) => {
      return {
        userName: user.userName,
        workouts: user.workouts.map((workout) => workout.type).join(', '),
        totalWorkouts: user.workouts.length,
        totalWorkoutDuration: user.workouts.reduce(
          (sum, workout) => sum + workout.minutes,
          0
        ),
      };
    });
  }

  ngOnInit() {
    //fetching the user work data on page load
    this.userWorkoutData = this.workoutApiServices.getAllWorkoutData();
    this.formatUserWorkoutData();
    console.log('format ', this.formattedWorkoutList);
  }
}
