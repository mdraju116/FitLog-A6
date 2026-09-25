
"use client"

import { createContext, ReactNode, useState, useEffect, useRef } from "react";
import { WorkoutType } from "../types/workoutType";

interface ContextProps {
    addToPlan: WorkoutType[],
    setAddToPlan: React.Dispatch<React.SetStateAction<WorkoutType[]>>,
    saveToLater: WorkoutType[],
    setSaveToLater: React.Dispatch<React.SetStateAction<WorkoutType[]>>,
    completedWorkouts: number[],
    setCompletedWorkouts: React.Dispatch<React.SetStateAction<number[]>>,
}

// export const WorkoutContext = createContext<any>(null);

export const WorkoutContext = createContext<ContextProps>({
    addToPlan: [],
    setAddToPlan: () => { },
    saveToLater: [],
    setSaveToLater: () => { },
    completedWorkouts: [],
    setCompletedWorkouts: () => { }

})

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    //load data
    const [addToPlan, setAddToPlan] = useState<WorkoutType[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }
        const savedPlan = localStorage.getItem("fitlog-plan");
        return savedPlan ? JSON.parse(savedPlan) : [];
    });

    const [saveToLater, setSaveToLater] = useState<WorkoutType[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }
        const savedLater = localStorage.getItem("fitlog-saved");
        return savedLater ? JSON.parse(savedLater) : [];
    });

    const [completedWorkouts, setCompletedWorkouts] = useState<number[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }
        const savedCompleted = localStorage.getItem("fitlog-completed");
        return savedCompleted ? JSON.parse(savedCompleted) : [];
    });

    
    // Save Today's Plan
    useEffect(() => {
        localStorage.setItem(
            "fitlog-plan",
            JSON.stringify(addToPlan)
        );
    }, [addToPlan]);

    // Save Saved Workouts
    useEffect(() => {
        localStorage.setItem(
            "fitlog-saved",
            JSON.stringify(saveToLater)
        );
    }, [saveToLater]);

    // Save Completed Workouts
    useEffect(() => {
        localStorage.setItem(
            "fitlog-completed",
            JSON.stringify(completedWorkouts)
        );
    }, [completedWorkouts]);



    const sharedContext = {
        addToPlan, setAddToPlan,
        saveToLater, setSaveToLater,
        completedWorkouts, setCompletedWorkouts,
    }


    return (
        <WorkoutContext.Provider value={sharedContext}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;