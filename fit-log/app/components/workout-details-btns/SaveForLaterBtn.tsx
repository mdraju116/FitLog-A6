import { FaRegBookmark } from "react-icons/fa6";
import { WorkoutType } from "@/app/types/workoutType";


interface Props{
     workout: WorkoutType,
}


const SaveForLaterBtn = ({workout}:Props) => {




    return (
        <div>
            <button className="btn rounded-xl border border-[#323436] bg-[#15171a] text-white shadow-none hover:bg-[#15171a]">
              <FaRegBookmark  />
              
              Save for later
            </button>
        </div>
    );
};

export default SaveForLaterBtn;