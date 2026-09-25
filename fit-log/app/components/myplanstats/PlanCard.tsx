
"use client"
import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { GoFlame } from "react-icons/go";
import { MdOutlineStarRate } from "react-icons/md";
import type { WorkoutType } from "@/app/types/workoutType";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import { toast } from "react-toastify";


interface Props {
  workout: WorkoutType,
  isPlan: boolean;
}

const PlanCard = ({ workout, isPlan }: Props) => {
  const { addToPlan, setAddToPlan, saveToLater, setSaveToLater, completedWorkouts, setCompletedWorkouts, }
    = useContext(WorkoutContext);

  const handleMarkAsDone = () => {
    if (completedWorkouts.includes(workout.id)) {
      return;
    }
    setCompletedWorkouts([...completedWorkouts, workout.id]);
    toast.success(`"${workout.name}" marked as done.`);
  };
  const isCompleted = completedWorkouts.includes(workout.id);


  const handleRemove = () => {
    if (isPlan) {
      setAddToPlan(
        addToPlan.filter((item) => item.id !== workout.id)
      );

      toast.error(`"${workout.name}" removed from your plan.`);
    } else {
      setSaveToLater(
        saveToLater.filter((item) => item.id !== workout.id)
      );

      toast.error(`"${workout.name}" removed from saved.`);
    }
  };



  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#111318] p-4 md:flex-row md:items-center">

      {/* Left Side */}
      <div className="flex min-w-0 flex-1 gap-4">

        {/* Image */}
        <div className="w-32 shrink-0 overflow-hidden rounded-xl sm:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            width={160}
            height={120}
            className="h-28 w-full object-cover"
          />
        </div>

        {/* Workout Information */}
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-1 text-sm text-[#8a92a0]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#b1b5bb]">

            <span className="flex items-center gap-2">
              <FaRegClock className="text-[#c2f800]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-2">
              <GoFlame className="text-[#c2f800]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <MdOutlineStarRate className="text-[#c2f800]" />
              {workout.rating}
            </span>

          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workout-details/${workout.id}`}
          className="rounded-xl bg-[#191c22] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#222630]"
        >  View Details </Link>

        {isPlan && (
          <button
            onClick={handleMarkAsDone}
            disabled={isCompleted}
            className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition ${isCompleted
              ? "cursor-not-allowed bg-[#2a2d34] text-[#8a92a0]"
              : "bg-[#c2f800] text-black hover:bg-[#b5eb00]"
              }`}
          > <FaCheck />
            {isCompleted ? "Completed" : "Mark as done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#191c22] text-[#8a92a0] transition hover:bg-[#222630] hover:text-white"
          aria-label="Remove workout"
        >
          <IoClose className="text-xl" />
        </button>

      </div>

    </div>
  );
};

export default PlanCard;