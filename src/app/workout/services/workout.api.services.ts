import { Injectable } from '@angular/core';

import { UtilService } from '../../common/services/util.service';
import { WorkoutConfig } from '../../common/constants/workout.config';

import {
  UserDataList,
  UserWorkoutListDataModel,
} from './../model/workout.list.model';
import { UserWorkoutInputDataModel } from '../model/workout.model';

@Injectable()
export class WorkoutApiServices {
  addNewUserWorkoutData(inputData: UserWorkoutInputDataModel) {
    let previousUserData: UserWorkoutListDataModel[] =
      UtilService.getItem(WorkoutConfig.WORKOUT_LIST_KEY) || [];

    // Find the user with the given username
    let foundUser = previousUserData.find(
      (item) => item.userName === inputData.userName
    );

    if (foundUser) {
      // Check if the workout type already exists
      let existingWorkout = foundUser.workouts.find(
        (workout) => workout.type === inputData.workoutType
      );

      if (existingWorkout) {
        // If workout type exists, add minutes to the existing entry
        existingWorkout.minutes += inputData.workoutMinutes;
      } else {
        // If workout type doesn't exist, add a new workout record
        foundUser.workouts.push({
          type: inputData.workoutType,
          minutes: inputData.workoutMinutes,
        });
      }
    } else {
      // If user doesn't exist, create a new user entry
      let newUser: UserWorkoutListDataModel = {
        id: previousUserData.length + 1, // Generate new ID based on length
        userName: inputData.userName,
        workouts: [
          {
            type: inputData.workoutType,
            minutes: inputData.workoutMinutes,
          },
        ],
      };

      previousUserData.push(newUser);
    }

    // Save updated data to localStorage
    UtilService.setItem(WorkoutConfig.WORKOUT_LIST_KEY, previousUserData);
  }

  getAllWorkoutData(): UserWorkoutListDataModel[] {
    // Retrieve data from localStorage
    let allWorkoutData: UserWorkoutListDataModel[] = UtilService.getItem(
      WorkoutConfig.WORKOUT_LIST_KEY
    );

    if (!allWorkoutData) return [];

    return allWorkoutData;
  }

  getUserWorkoutById(id: number): UserWorkoutListDataModel | null {
    let allWorkoutData: UserWorkoutListDataModel[] = UtilService.getItem(
      WorkoutConfig.WORKOUT_LIST_KEY
    );

    if (!allWorkoutData) return null;

    return allWorkoutData.find((user) => user.id === id) || null;
  }

  getAllUsersData(): UserDataList[] {
    let allWorkoutData: UserWorkoutListDataModel[] = UtilService.getItem(
      WorkoutConfig.WORKOUT_LIST_KEY
    );

    if (!allWorkoutData) return [];

    // Return an array of objects with userId and userName
    return allWorkoutData.map((user) => ({
      userId: user.id,
      userName: user.userName,
    }));
  }
}
