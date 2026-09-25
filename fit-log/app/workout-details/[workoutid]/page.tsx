
import { WorkoutType } from "@/app/types/workoutType";
import Image from "next/image";


import AddToPlanBtn from "@/app/components/workout-details-btns/AddToPlanBtn";
import SaveForLaterBtn from "@/app/components/workout-details-btns/SaveForLaterBtn";


const getWorkout = async (id: string): Promise<WorkoutType> => {
  try {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const workout = await response.json();
    return workout;
  } catch (error) {
    console.log("Found error fetching data :", error);
    throw error;
  }
}


type Props = {
  params: Promise<{
    workoutid: string;
  }>;
};



//Main Fuctions
const SingleWorkoutDetails = async ({ params }: Props) => {
  const { workoutid } = await params;

  const workout = await getWorkout(workoutid);



  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-xl bg-[#111318] shadow-lg">

        {/* Left Column - Image */}
        <div className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="px-5 pt-2 pb-5 md:px-6 md:pb-6">

         
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-white">
            {workout.name}
          </h1>

         
          <p className="mt-2 text-sm leading-5 text-[#9ca3af]">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mt-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge bg-[#222630] border-none text-[#ccff00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-4 rounded-lg bg-[#191c22] px-4 py-1">

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">EQUIPMENT</span>
              <span className="text-sm font-normal text-white">
                {workout.equipment}
              </span>
            </div>

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">DIFFICULTY</span>
              <span className="text-sm font-normal text-white">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">SETS</span>
              <span className="text-sm font-normal text-white">
                {workout.sets}
              </span>
            </div>

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">REPS</span>
              <span className="text-sm font-normal text-white">
                {workout.reps}
              </span>
            </div>

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">DURATION</span>
              <span className="text-sm font-normal text-white">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-[#2a2d34] py-2">
              <span className="text-sm text-[#9ca3af]">CALORIES</span>
              <span className="text-sm font-normal text-white">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-sm text-[#9ca3af]">RATING</span>
              <span className="text-sm font-normal text-white">
                 {workout.rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-2">
            <h2 className="text-lg font-bold text-white">
              INSTRUCTIONS
            </h2>

            <ol className="mt-1 space-y-1">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm text-[#9ca3af]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2b2b26] text-xs font-bold text-white">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-3 flex flex-col sm:flex-row gap-4">
              <AddToPlanBtn workout={workout}/>
              <SaveForLaterBtn workout={workout}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleWorkoutDetails;