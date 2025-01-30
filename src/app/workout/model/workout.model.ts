export interface UserWorkoutInputDataModel {
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

export interface FormattedWorkoutListModel {
  userName: string;
  workouts: string;
  totalWorkouts: number;
  totalWorkoutDuration: number;
}
