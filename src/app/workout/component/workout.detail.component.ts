import { Component, OnInit } from '@angular/core';
import { WorkoutApiServices } from '../services/workout.api.services';
import {
  UserDataList,
  UserWorkoutListDataModel,
} from '../model/workout.list.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  templateUrl: '../template/workout.detail.component.html',
  standalone: false,
})
export class WorkoutDetailComponent implements OnInit {
  userId!: number; // Accept user ID as input
  userWorkoutData: UserWorkoutListDataModel | null = null;
  workoutLabels: string[] = [];
  workoutMinutes: number[] = [];
  userList: UserDataList[] = [];

  constructor(
    private workoutApiServices: WorkoutApiServices,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.userId = +params['id']; // Convert to number
        this.loadUserWorkoutData(this.userId);
        this.userList = this.workoutApiServices.getAllUsersData();
      }
    });
  }

  loadUserWorkoutData(id: number) {
    this.userWorkoutData = this.workoutApiServices.getUserWorkoutById(id);

    if (this.userWorkoutData) {
      this.workoutLabels = this.userWorkoutData.workouts.map(
        (workout) => workout.type
      );
      this.workoutMinutes = this.userWorkoutData.workouts.map(
        (workout) => workout.minutes
      );
    }
  }

  // Handle change in user selection
  onUserChange(event: any) {
    const selectedUserId = Number(event.target.value);
    this.router.navigate([], {
      queryParams: { id: selectedUserId },
      queryParamsHandling: 'merge', // Keep existing query parameters
    });
  }
}
