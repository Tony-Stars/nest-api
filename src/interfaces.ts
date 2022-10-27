export interface ITrainer {
  id: string;
  name: string;
  surname: string;
  age: number;
}

export interface ITrainerDto {
  name: string;
  surname: string;
  age: number;
}

export interface IWorkout {
  id: string;
  day: string;
  trainer: string;
}

export interface IWorkoutDto {
  day: string;
  completed: boolean;
  trainer: string;
}
