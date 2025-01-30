import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserWorkoutInputDataModel } from '../model/workout.model';
import { WorkoutApiServices } from '../services/workout.api.services';

@Component({
  selector: 'app-workout-home',
  templateUrl: '../template/workout.home.component.html',
})
export class WorkoutHomeComponent {
  workoutForm!: FormGroup;
  //used for rendering the workouts type options
  workoutTypeOptions = [
    { name: 'Running', displayName: 'RUNNING' },
    { name: 'Cycling', displayName: 'CYCLING' },
    { name: 'Yoga', displayName: 'YOGA' },
    { name: 'Swimming', displayName: 'SWIMMING' },
  ];

  constructor(private workoutApiService: WorkoutApiServices) {}

  ngOnInit() {
    //initialize the form
    this.workoutForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      workoutType: new FormControl('', Validators.required),
      workoutMinutes: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  resetForm() {
    //reset the form to default
    this.workoutForm.reset({
      userName: '',
      workoutType: '',
      workoutMinutes: '',
    });
  }

  handleDataAddition(data: UserWorkoutInputDataModel) {
    // store the data in local storage
    this.workoutApiService.addNewUserWorkoutData(data);
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      this.handleDataAddition(this.workoutForm.value);

      //reset the form after saving the data
      this.resetForm();
    }
  }
}
