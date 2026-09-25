
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { WorkoutType } from "@/app/types/workoutType";

interface Props{
     workout: WorkoutType,
}


const AddToPlanBtn = ({ workout }: Props) => {



    return (
        <div>
            <button className="btn  bg-[#ccff00] text-black border-none rounded-xl">
                <MdCheckBoxOutlineBlank />
                Add to today&apos;s plan
            </button>
        </div>
    );
};

export default AddToPlanBtn;