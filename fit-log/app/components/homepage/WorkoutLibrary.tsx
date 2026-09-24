import WorkoutLibraryCard from "../shared/WorkoutLibraryCard";
import { WorkoutType } from "@/app/types/workoutType";


const getWorkouts = async ():Promise<WorkoutType[]> => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const workouts = await response.json();
        return workouts;
    } catch (error) {
        console.log("Found error fetching data :", error);
        return [];
    }
}


const WorkoutLibrary = async () => {

    const workouts = await getWorkouts();

    // console.log("workouts:",workouts);

    return (
        <div id="library" className="container mx-auto px-4 sm:px-16 lg:px-24 space-y-2">
            <h1 className="text-white text-4xl font-bold">THE LIBRARY</h1>
            <p className="text-[14px] font-normal text-[#9ca3af] mb-8">Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-2 ">


            {
                
             workouts.map((workout)=><WorkoutLibraryCard key={workout.id} workout={workout}/>)
                
            }

                

                

            </div>


        </div>


    );
};

export default WorkoutLibrary;