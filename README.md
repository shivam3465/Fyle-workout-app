Here's the improved version of your `README.md` with unit test results displayed in a box for better clarity:

---

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

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

---

This updated `README.md` now includes the unit test results in a more organized and clearer format inside a code block. It also retains the setup, build, and other necessary information.

