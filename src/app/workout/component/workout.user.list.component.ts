import { WorkoutApiServices } from './../services/workout.api.services';
import { Component } from '@angular/core';
import { UserWorkoutListDataModel } from '../model/workout.list.model';
import { FormattedWorkoutListModel } from '../model/workout.model';
import { WorkoutConfig } from '../../common/constants/workout.config';

@Component({
  selector: 'app-workout-user-list',
  templateUrl: '../template/workout.user.list.component.html',
})
export class WorkoutUserListComponent {
  cars = [
    { id: 1, name: 'BMW Hyundai' },
    { id: 2, name: 'Kia Tata' },
    { id: 3, name: 'Volkswagen Ford' },
    { id: 4, name: 'Renault Audi' },
    { id: 5, name: 'Mercedes Benz Skoda' },
  ];

  selected = [{ id: 3, name: 'Volkswagen Ford' }];

  filter = {
    userName: '',
    workoutType: [...WorkoutConfig.WORKOUT_TYPE_OPTION],
  };
  workoutTypeOptions = WorkoutConfig.WORKOUT_TYPE_OPTION;

  tableColumnHeaders: string[] = [
    'Name',
    'Workout',
    'No. of Workout',
    'Total Workout Minutes',
  ];

  userWorkoutData!: UserWorkoutListDataModel[];
  formattedWorkoutList!: FormattedWorkoutListModel[];

  constructor(private workoutApiServices: WorkoutApiServices) {}

  ngOnInit() {
    //fetching the user work data on page load
    this.userWorkoutData = this.workoutApiServices.getAllWorkoutData();
    this.formatUserWorkoutData(this.userWorkoutData);
  }

  //formats user's workout data as per table structure
  formatUserWorkoutData(data: UserWorkoutListDataModel[]) {
    this.formattedWorkoutList = data.map((user) => {
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

  // This function applies the filter based on user input and formats the filtered data
  applyFilter() {
    let filteredData = this.userWorkoutData;

    // Filter by userName (case insensitive)
    if (this.filter.userName) {
      filteredData = filteredData.filter((user) =>
        user.userName.toLowerCase().includes(this.filter.userName.toLowerCase())
      );
    }

    // Extract selected workout names from the array of objects
    const selectedWorkoutNames = this.filter.workoutType.map((w) => w.name);

    // Filter by workoutType (selected workout names array)
    if (selectedWorkoutNames.length > 0) {
      filteredData = filteredData.filter((user) =>
        user.workouts.some((workout) =>
          selectedWorkoutNames.includes(workout.type)
        )
      );
    }

    // After filtering, format the data
    this.formatUserWorkoutData(filteredData);
  }
}
