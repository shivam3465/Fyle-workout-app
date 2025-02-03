# FYLE Workout App

## Project Setup

Follow these steps to clone and set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/shivam3465/Fyle-workout-app
```

### 2. Navigate into the project directory

```bash
cd Fyle-workout-app
```

### 3. Install dependencies

Run the following command to install the project’s dependencies:

```bash
npm install
```

This will install all the necessary packages defined in the `package.json` file.

### 4. Serve the application

To run the application locally in development mode, execute:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running Unit Tests

Run the following command to execute the unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Unit Test Results

```bash
Total Specs: 12  
Failures: 0  
Seed: 16057
```

### `WorkoutHomeComponent` Tests:
- **should call addNewUserWorkoutData on submit if form is valid**
- **should reset the form after submit**
- **should call handleDataAddition when the form is submitted with valid data**
- **should reset form when resetForm is called**
- **should create the component and initialize the form**
- **should validate the form fields correctly**

### `WorkoutApiServices` Tests:
- **should retrieve all workout data**
- **should return an empty array if no workout data exists**
- **should add a new workout entry for a new user**
- **should create the service**
- **should add a new workout type for an existing user**
- **should update workout minutes for an existing user and workout type**

### Code Coverage

- The project has **100% code coverage** for both the component and service, ensuring all parts of the code have been tested.

## Assumptions While Building the Assignment

- **User Search and Identification**: The user is identified based on the **userName** provided. When the user submits workout data, the application first checks whether a user with the same `userName` already exists in the system.
  
- **Updating Existing Users' Workout Data**: If the user already exists, their workout data is updated. If the user is submitting a workout type that they already have, the app adds the new workout time to the existing total. For example, if a user has `Running` with 10 minutes and submits another `Running` workout for 10 minutes, the total running time will now be 20 minutes.

- **Creating New Users**: If no user is found with the same `userName`, the application will create a new user entry in the system with the given workout data.

- **Workout Time Aggregation**: If a user adds the same workout type multiple times, the app will sum the total workout minutes for that type. For instance, if a user has `Running` workouts logged as 10 minutes each time, the total workout time for `Running` will be accumulated. 

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
