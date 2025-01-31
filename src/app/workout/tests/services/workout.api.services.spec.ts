import { TestBed } from '@angular/core/testing';
import { WorkoutApiServices } from '../../services/workout.api.services';
import { UtilService } from '../../../common/services/util.service';
import { WorkoutConfig } from '../../../common/constants/workout.config';
import { UserWorkoutInputDataModel } from '../../model/workout.model';
import { UserWorkoutListDataModel } from '../../model/workout.list.model';

describe('WorkoutApiServices', () => {
  let service: WorkoutApiServices;

  // Mock the static methods using spyOnProperty
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutApiServices],
    });

    service = TestBed.inject(WorkoutApiServices);

    spyOn(UtilService, 'setItem').and.callFake(() => {}); // Stub for setItem, only once in beforeEach
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new workout entry for a new user', () => {
    const inputData: UserWorkoutInputDataModel = {
      userName: 'John Doe',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    // Spy on getItem for this specific test
    spyOn(UtilService, 'getItem').and.returnValue([]); // Simulate no existing users

    service.addNewUserWorkoutData(inputData);

    expect(UtilService.setItem).toHaveBeenCalledWith(
      WorkoutConfig.WORKOUT_LIST_KEY,
      jasmine.any(Array)
    );
  });

  it('should update workout minutes for an existing user and workout type', () => {
    const existingUser: UserWorkoutListDataModel = {
      id: 1,
      userName: 'John Doe',
      workouts: [{ type: 'Running', minutes: 20 }],
    };

    const inputData: UserWorkoutInputDataModel = {
      userName: 'John Doe',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    // Simulate existing user data
    spyOn(UtilService, 'getItem').and.returnValue([existingUser]); // Return existing user data

    service.addNewUserWorkoutData(inputData);

    expect(UtilService.setItem).toHaveBeenCalledWith(
      WorkoutConfig.WORKOUT_LIST_KEY,
      jasmine.any(Array)
    );
  });

  it('should add a new workout type for an existing user', () => {
    const existingUser: UserWorkoutListDataModel = {
      id: 1,
      userName: 'John Doe',
      workouts: [{ type: 'Running', minutes: 30 }],
    };

    const inputData: UserWorkoutInputDataModel = {
      userName: 'John Doe',
      workoutType: 'Swimming',
      workoutMinutes: 45,
    };

    // Simulate existing user data
    spyOn(UtilService, 'getItem').and.returnValue([existingUser]); // Return existing user data

    service.addNewUserWorkoutData(inputData);

    expect(UtilService.setItem).toHaveBeenCalledWith(
      WorkoutConfig.WORKOUT_LIST_KEY,
      jasmine.any(Array)
    );
  });

  it('should retrieve all workout data', () => {
    const mockData: UserWorkoutListDataModel[] = [
      {
        id: 1,
        userName: 'John Doe',
        workouts: [{ type: 'Running', minutes: 30 }],
      },
    ];

    // Simulate fetching data from localStorage
    spyOn(UtilService, 'getItem').and.returnValue(mockData); // Return mock data

    const result = service.getAllWorkoutData();
    expect(result).toEqual(mockData); // Ensure the result matches the mock data
  });

  it('should return an empty array if no workout data exists', () => {
    // Spy on `getItem` to return null or an empty array
    spyOn(UtilService, 'getItem').and.returnValue(null); // Simulating that no data exists in localStorage

    const result = service.getAllWorkoutData();
    expect(result).toEqual([]); // Ensure empty array is returned when no data exists
  });
});
