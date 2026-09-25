import type { WorkoutType } from "@/app/types/workoutType";

interface Props {
  workouts: WorkoutType[];
}

const PlanStats = ({ workouts }: Props) => {
  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="flex rounded-2xl bg-[#1e2127] p-6">
      <div className="flex-1">
        <p className="text-xl font-medium text-[#8a92a0]">
          Exercises
        </p>

        <span className="text-4xl font-bold text-[#ccff00]">
          {workouts.length}
        </span>
      </div>

      <div className="mr-4 h-20 w-px bg-gray-700"></div>

      <div className="flex-1">
        <p className="text-xl font-medium text-[#8a92a0]">
          Minutes
        </p>

        <span className="text-4xl font-bold text-white">
          {totalMinutes}
        </span>
      </div>

      <div className="mr-4 h-20 w-px bg-gray-700"></div>

      <div className="flex-1">
        <p className="text-xl font-medium text-[#8a92a0]">
          Calories
        </p>

        <span className="text-4xl font-bold text-white">
          {totalCalories}
        </span>
      </div>
    </div>
  );
};

export default PlanStats;