export class WorkoutConfig {
  public static WORKOUT_LIST_KEY = 'tislkorW';
  public static WORKOUT_TYPE_OPTION = [
    { name: 'Running', displayName: 'RUNNING' },
    { name: 'Cycling', displayName: 'CYCLING' },
    { name: 'Yoga', displayName: 'YOGA' },
    { name: 'Swimming', displayName: 'SWIMMING' },
  ];
  public static INITIAL_USER_DATA = [
    {
      id: 1,
      userName: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 20 },
        { type: 'Cycling', minutes: 45 },
      ],
    },
    {
      id: 2,
      userName: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 },
      ],
    },
    {
      id: 3,
      userName: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 },
      ],
    },
  ];
}
