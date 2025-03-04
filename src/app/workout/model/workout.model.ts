export interface UserWorkoutInputDataModel {
  userName: string;
  workoutType: string;
  workoutMinutes: number;
}

export interface FormattedWorkoutListModel {
  id: number;
  userName: string;
  workouts: string;
  totalWorkouts: number;
  totalWorkoutDuration: number;
}
