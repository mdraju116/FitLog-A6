import WorkoutLibraryCard from "../shared/WorkoutLibraryCard";


const WorkoutLibrary = () => {
    return (
        <div className="container mx-auto px-26 space-y-2">
            <h1 className="text-white text-4xl font-bold">THE LIBRARY</h1>
            <p className="text-[14px] font-normal text-[#9ca3af]">Twelve lifts covering every major muscle group.</p>
        
        <div className="grid grid-cols-3 gap-2">
            
            <WorkoutLibraryCard></WorkoutLibraryCard>
        
        </div>


        </div>

        
    );
};

export default WorkoutLibrary;