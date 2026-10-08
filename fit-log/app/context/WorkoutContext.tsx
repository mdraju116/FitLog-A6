
"use client"

import { createContext, ReactNode, useState, useEffect } from "react";
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
    //initial values
    addToPlan: [], //initially empty[]
    setAddToPlan: () => { },  //placeholder function
    saveToLater: [],
    setSaveToLater: () => { },
    completedWorkouts: [],
    setCompletedWorkouts: () => { }

})

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    //1.get data
    //[addToPlan, setAddToPlan] used in - Navbar.tsx, myplan/page.tsx, AddToPlanBtn.tsx, PlanCard.tsx
    const [addToPlan, setAddToPlan] = useState<WorkoutType[]>(() => {
        if (typeof window === "undefined") {   //check user on browser(window=object) or server(window=undefined)
            return []; 
        }
        const savedPlan = localStorage.getItem("fitlog-plan");
        return savedPlan ? JSON.parse(savedPlan) : [];
    });


    //[saveToLater, setSaveToLater] used in - myplan/page.tsx, SaveForLaterBtn.tsx, PlanCard.tsx
    const [saveToLater, setSaveToLater] = useState<WorkoutType[]>(() => {     
        if (typeof window === "undefined") {
            return [];
        }
        const savedLater = localStorage.getItem("fitlog-saved");
        return savedLater ? JSON.parse(savedLater) : [];
    });


    //[completedWorkouts, setCompletedWorkouts] used in - PlanTabs.tsx, PlanStats.tsx and PlanCard.tsx
    const [completedWorkouts, setCompletedWorkouts] = useState<number[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }
        const savedCompleted = localStorage.getItem("fitlog-completed");
        return savedCompleted ? JSON.parse(savedCompleted) : [];
    });


    //2.Set data
    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(addToPlan) );
    }, [addToPlan]);

    useEffect(() => {
        localStorage.setItem( "fitlog-saved", JSON.stringify(saveToLater)  );
    }, [saveToLater]);

    useEffect(() => {
        localStorage.setItem( "fitlog-completed", JSON.stringify(completedWorkouts) );
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