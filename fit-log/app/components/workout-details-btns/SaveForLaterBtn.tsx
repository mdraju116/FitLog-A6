"use client"

import { FaRegBookmark } from "react-icons/fa6";
import { WorkoutType } from "@/app/types/workoutType";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import { useContext } from "react";
import { toast } from "react-toastify";


interface Props{
     workout: WorkoutType,
}


const SaveForLaterBtn = ({workout}:Props) => {

const {saveToLater,setSaveToLater}=useContext(WorkoutContext);

const handleSetSave =()=>{
    const alreadyAdded = saveToLater.find((item) => item.id === workout.id );

    if(alreadyAdded){
         toast.info(`"${workout.name}" is already in your saved plan.`);
        return;
    }

    setSaveToLater([...saveToLater, workout]);
    toast.success(`"${workout.name}" has been saved for later.`);


}


    return (
        <div>
            <button onClick={()=>{handleSetSave()}} className="btn rounded-xl border border-[#323436] bg-[#15171a] text-white shadow-none hover:bg-[#15171a]">
              <FaRegBookmark  />
              
              Save for later
            </button>
        </div>
    );
};

export default SaveForLaterBtn;