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

    const planLimitReached = addToPlan.length >= 5;


    const handleSetPlans = () => {
        if (planLimitReached) {
            toast.error("Today's plan is full. Remove a workout to add a new one.");
            return;
        }

        const alreadyAdded = addToPlan.find((item) => item.id === workout.id);
        if (alreadyAdded) {
            toast.info(`"${workout.name}" is already in your today's plan.`);
            return;
        }

        setAddToPlan([...addToPlan, workout]);

        toast.success(` "${workout.name}" has been added to today's plan.`);

        //  console.log("My Plan:", [...addToPlan, workout]);  //see the added item at the console after clicking the btn
    };

    return (
        <div>
            <button
                onClick={handleSetPlans}
                className={`btn rounded-xl border-none ${planLimitReached
                    ? "cursor-not-allowed bg-[#2a2d34] text-[#8a92a0]"
                    : "bg-[#ccff00] text-black"
                    }`}
            >
                <MdCheckBoxOutlineBlank />

                {planLimitReached
                    ? "Today's plan is full"
                    : "Add to today's plan"}
            </button>


        </div>
    );
};

export default AddToPlanBtn;