

const MyPlanPage = () => {
    return (

        <div className="container mx-auto px-4 sm:px-16 lg:px-24 my-8">
            <h1 className="text-[30px] text-white font-bold">MY PLAN</h1>
            <p className="text-[16px] text-[#b1b5bb] font-normal">Cap of five lifts for today. Finish them, then load more.</p>

            {/* plans stats */}
            <div className="bg-[#1e2127] flex my-6 p-6 rounded-2xl">
                <div className="flex-1">
                    <p className="text-[#8a92a0] text-xl font-medium">Exercises</p>
                    <span className="text-[#ccff00] text-4xl font-bold">2</span>
                </div>

                <div className="h-20 w-px bg-gray-700 mr-4"></div>
                <div className="flex-1">
                    <p className="text-[#8a92a0] text-xl font-medium">Minutes</p>
                    <span className="text-white text-4xl font-bold">23</span>
                </div>

                <div className="h-20 w-px bg-gray-700 mr-4"></div>
                <div className="flex-1">
                    <p className="text-[#8a92a0] text-xl font-medium">Calories</p>
                    <span className="text-white text-4xl font-bold">190</span>
                </div>

            </div>



            {/* tabs and sorting */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                {/* Tabs */}
                <div className="rounded-xl bg-[#1e2127] p-1">
                    <div className="tabs">
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab text-[#8a92a0] checked:bg-[#ccff00] checked:text-black rounded-xl"
                            aria-label="Today's Plan"
                            defaultChecked
                        />

                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab text-[#8a92a0] checked:bg-[#ccff00] checked:text-black rounded-xl"
                            aria-label="Saved"
                        />
                    </div>
                </div>

                
                {/* Sorting */}
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <h2 className="text-sm font-medium text-[#8a92a0]">
                        Sort By
                    </h2>

                    <select
                        defaultValue="Duration"
                        className="select rounded-xl border border-[#2a2d34] bg-[#1e2127] text-white"
                    >
                        <option>Duration</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>
                </div>

            </div>


            {/* empty list */}
            <div className="mt-6 flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-[#3a3d44] bg-[#111318] px-6 text-center">

                <h2 className="text-xl font-bold text-white">
                    NOTHING HERE YET
                </h2>

                <p className="mt-2 max-w-md text-sm text-[#8a92a0]">
                    Browse the library and add a lift to get today moving.
                </p>

                <button className="mt-5 rounded-xl bg-[#ccff00] px-5 py-3 font-medium text-black">
                    Go to Workouts
                </button>

            </div>


            {/* workout card imported from MyplanCard.tsx  */}




        </div>


    );
};

export default MyPlanPage;