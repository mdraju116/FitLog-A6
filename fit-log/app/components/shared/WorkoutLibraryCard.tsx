import Image from "next/image";
import type { WorkoutType } from "@/app/types/workoutType";
import { GoFlame } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineStarRate } from "react-icons/md";

type WorkoutCardProps = {
    workout: WorkoutType;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <div className="bg-[#111318] rounded-xl overflow-hidden shadow-md">

            {/* Image */}
            <Image
                src={workout.image}
                alt={workout.name}
                width={500}
                height={300}
                className="w-full h-56 object-fill"
            />

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="badge badge-sm bg-[#c2f800] text-black border-none font-bold text-[12px]"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="text-sm text-gray-400 mt-1">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mt-5">

                    {/* Duration */}
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg shadow bg-[#1b1e24] text-sm text-gray-300">
                        <IoTimeOutline /> {workout.duration} min
                    </span>

                    {/* Calories */}
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg shadow bg-[#1b1e24] text-sm text-gray-300">
                        <GoFlame /> {workout.caloriesBurned} kcal
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-2 px-3 py-2 rounded-lg shadow bg-[#1b1e24] text-sm text-gray-300">
                        <MdOutlineStarRate /> {workout.rating}
                    </span>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;