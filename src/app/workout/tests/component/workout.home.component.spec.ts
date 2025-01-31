import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutHomeComponent } from '../../component/workout.home.component';
import { WorkoutApiServices } from '../../services/workout.api.services';
import { UserWorkoutInputDataModel } from '../../model/workout.model';

describe('WorkoutHomeComponent', () => {
  let component: WorkoutHomeComponent;
  let fixture: ComponentFixture<WorkoutHomeComponent>;
  let mockWorkoutApiService: jasmine.SpyObj<WorkoutApiServices>;

  beforeEach(async () => {
    mockWorkoutApiService = jasmine.createSpyObj('WorkoutApiServices', [
      'addNewUserWorkoutData',
    ]);

    await TestBed.configureTestingModule({
      declarations: [WorkoutHomeComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: WorkoutApiServices, useValue: mockWorkoutApiService },
      ],
    }).compileComponents();
  });

  afterEach(() => {
    // Manually reset the spy
    mockWorkoutApiService.addNewUserWorkoutData.calls.reset();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
    component.ngOnInit(); // Ensure ngOnInit is called to initialize the form
  });

  it('should create the component and initialize the form', () => {
    expect(component).toBeTruthy();
    expect(component.workoutForm).toBeDefined();
    expect(component.workoutForm.get('userName')).toBeDefined();
    expect(component.workoutForm.get('workoutType')).toBeDefined();
    expect(component.workoutForm.get('workoutMinutes')).toBeDefined();
  });

  it('should validate the form fields correctly', () => {
    const userName = component.workoutForm.get('userName');
    const workoutType = component.workoutForm.get('workoutType');
    const workoutMinutes = component.workoutForm.get('workoutMinutes');

    // Test required validation
    userName?.setValue('');
    workoutType?.setValue('');
    workoutMinutes?.setValue('');
    expect(component.workoutForm.valid).toBeFalse();

    userName?.setValue('John');
    workoutType?.setValue('Running');
    workoutMinutes?.setValue(30);
    expect(component.workoutForm.valid).toBeTrue();
  });

  it('should call addNewUserWorkoutData on submit if form is valid', () => {
    const mockFormData: UserWorkoutInputDataModel = {
      userName: 'John',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    // Set form values
    component.workoutForm.setValue(mockFormData);
    fixture.detectChanges(); // Ensure that the form is fully updated

    console.log('form valid ', component.workoutForm.valid);
    // Trigger form submission
    component.onSubmit();
    fixture.detectChanges(); // Ensure form reset happens after submit

    // Check if the form was reset to initial state (empty values)
    expect(component.workoutForm.get('userName')?.value).toBe('');
    expect(component.workoutForm.get('workoutType')?.value).toBe('');
    expect(component.workoutForm.get('workoutMinutes')?.value).toBe('');

    console.log('form valid ', component.workoutForm.valid);
    // Check if the service method is called with the correct form data
    expect(mockWorkoutApiService.addNewUserWorkoutData).toHaveBeenCalledWith(
      mockFormData
    );

    // Ensure the form is valid before submitting
    expect(component.workoutForm.valid).toBeFalse();
  });

  it('should reset the form after submit', () => {
    const mockFormData: UserWorkoutInputDataModel = {
      userName: 'John',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    component.workoutForm.setValue(mockFormData);
    component.onSubmit();

    // Expect the form to be reset
    expect(component.workoutForm.get('userName')?.value).toBe('');
    expect(component.workoutForm.get('workoutType')?.value).toBe('');
    expect(component.workoutForm.get('workoutMinutes')?.value).toBe('');
  });

  it('should call handleDataAddition when the form is submitted with valid data', () => {
    const mockFormData: UserWorkoutInputDataModel = {
      userName: 'John',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    spyOn(component, 'handleDataAddition'); // spy on the handleDataAddition method
    component.workoutForm.setValue(mockFormData);
    fixture.detectChanges(); // Ensure change detection happens after form update

    component.onSubmit();

    // Expect handleDataAddition to be called with the form data
    expect(component.handleDataAddition).toHaveBeenCalledWith(mockFormData);
  });

  it('should reset form when resetForm is called', () => {
    const initialFormData = {
      userName: 'John',
      workoutType: 'Running',
      workoutMinutes: 30,
    };

    component.workoutForm.setValue(initialFormData);
    component.resetForm();

    // Expect the form to be reset to initial state
    expect(component.workoutForm.get('userName')?.value).toBe('');
    expect(component.workoutForm.get('workoutType')?.value).toBe('');
    expect(component.workoutForm.get('workoutMinutes')?.value).toBe('');
  });
});
