import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { GoFlame } from "react-icons/go";
import { MdOutlineStarRate } from "react-icons/md";
import type { WorkoutType } from "@/app/types/workoutType";

interface Props {
  workout: WorkoutType;
}

const PlanCard = ({ workout }: Props) => {
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
      <div className="flex shrink-0 gap-2">
        <Link
          href={`/workout-details/${workout.id}`}
          className="rounded-xl bg-[#191c22] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#222630]"
        >
          View Details
        </Link>

        <button
          className="rounded-xl bg-[#c2f800] px-4 py-3 text-sm font-medium text-black transition hover:bg-[#b5eb00]"
        >
          Mark as done
        </button>
      </div>
    </div>
  );
};

export default PlanCard;