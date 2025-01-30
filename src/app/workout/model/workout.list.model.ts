export class UserWorkoutListDataModel {
  id: number;
  userName: string;
  workouts: WorkoutTypes[];

  constructor(data: Partial<UserWorkoutListDataModel>) {
    this.id = data.id ?? 0;
    this.userName = data.userName ?? '';
    this.workouts = (data.workouts ?? []).map(
      (workout) => new WorkoutTypes(workout)
    );
  }
}

export class WorkoutTypes {
  type: string;
  minutes: number;

  constructor(data: Partial<WorkoutTypes>) {
    this.type = data.type ?? '';
    this.minutes = data.minutes ?? 0;
  }
}
