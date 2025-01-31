import { WorkoutApiServices } from './../services/workout.api.services';
import { Component } from '@angular/core';
import { UserWorkoutListDataModel } from '../model/workout.list.model';
import { FormattedWorkoutListModel } from '../model/workout.model';
import { WorkoutConfig } from '../../common/constants/workout.config';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-user-list',
  templateUrl: '../template/workout.user.list.component.html',
  standalone: false,
})
export class WorkoutUserListComponent {
  filter = {
    userName: '',
    workoutType: WorkoutConfig.WORKOUT_TYPE_OPTION,
  };
  workoutTypeOptions: Array<any> = WorkoutConfig.WORKOUT_TYPE_OPTION;

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'name',
    textField: 'displayName',
    selectAllText: 'All',
    enableCheckAll: true,
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 2,
    allowRemoteDataSearch: false,
  };

  tableColumnHeaders: string[] = [
    'Name',
    'Workout',
    'No. of Workout',
    'Total Workout Minutes',
  ];

  userWorkoutData!: UserWorkoutListDataModel[]; // All fetched data
  formattedWorkoutList!: FormattedWorkoutListModel[]; // Filtered & paginated data

  curPageNo = 1;
  totalPages = 1;
  pageSize = 5; // Default page size

  constructor(
    private workoutApiServices: WorkoutApiServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.userWorkoutData = this.workoutApiServices.getAllWorkoutData();
    this.applyFilter();
  }

  // Navigate to details page on row click
  goToUserDetails(userId: number) {
    this.router.navigate(['/details'], { queryParams: { id: userId } });
  }

  onItemSelect(item: any) {
    this.applyFilter();
  }

  applyFilter() {
    let filteredData = this.userWorkoutData;

    // Filter by userName
    if (this.filter.userName) {
      filteredData = filteredData.filter((user) =>
        user.userName.toLowerCase().includes(this.filter.userName.toLowerCase())
      );
    }

    // Filter by workoutType
    const selectedWorkoutNames = this.filter.workoutType.map((w) => w.name);
    if (selectedWorkoutNames.length > 0) {
      filteredData = filteredData.filter((user) =>
        user.workouts.some((workout) =>
          selectedWorkoutNames.includes(workout.type)
        )
      );
    }

    // Update total pages dynamically
    this.totalPages = Math.ceil(filteredData.length / this.pageSize);

    // Apply pagination after filtering
    this.updatePaginatedData(filteredData);
  }

  updatePaginatedData(data: UserWorkoutListDataModel[]) {
    const startIndex = (this.curPageNo - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.formatUserWorkoutData(data.slice(startIndex, endIndex));
  }

  formatUserWorkoutData(data: UserWorkoutListDataModel[]) {
    this.formattedWorkoutList = data.map((user) => ({
      id: user.id,
      userName: user.userName,
      workouts: user.workouts.map((workout) => workout.type).join(', '),
      totalWorkouts: user.workouts.length,
      totalWorkoutDuration: user.workouts.reduce(
        (sum, workout) => sum + workout.minutes,
        0
      ),
    }));
  }

  handlePageChange(pageNo: number) {
    this.curPageNo = pageNo;
    this.applyFilter();
  }

  handlePageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.curPageNo = 1; // Reset to first page
    this.applyFilter();
  }
}
