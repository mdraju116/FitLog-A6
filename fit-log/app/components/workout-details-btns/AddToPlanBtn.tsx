"use client";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import type { WorkoutType } from "@/app/types/workoutType";
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import { toast } from "react-toastify";

interface Props {
    workout: WorkoutType;
}

const AddToPlanBtn = ({ workout }: Props) => {
    const { addToPlan, setAddToPlan } = useContext(WorkoutContext);

    const handleSetPlans = () => {
        const alreadyAdded = addToPlan.find((item) => item.id === workout.id );

        if (alreadyAdded) {
            toast.info(`"${workout.name}" is already in your today's plan.`);
            return;
        }

        setAddToPlan([...addToPlan, workout]);

        toast.success(` "${workout.name}" has been added to your today's plan.`);

        //  console.log("My Plan:", [...addToPlan, workout]);  //see the added item at the console after clicking the btn
    };

    return (
        <div>
            <button
                onClick={handleSetPlans}
                className="btn rounded-xl border-none bg-[#ccff00] text-black"
            >
                <MdCheckBoxOutlineBlank />
                Add to today&apos;s plan
            </button>

            
        </div>
    );
};

export default AddToPlanBtn;