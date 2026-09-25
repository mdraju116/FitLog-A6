
"use client"

import { ReactNode, useState } from "react";
import { createContext } from "react";
import { WorkoutType } from "../types/workoutType";

interface ContextProps{
    addToPlan :WorkoutType[],
    setAddToPlan:React.Dispatch<React.SetStateAction<WorkoutType[]>>,
    saveToLater:WorkoutType[],
    setSaveToLater:React.Dispatch<React.SetStateAction<WorkoutType[]>>
}

export const WorkoutContext =createContext <ContextProps>({
    addToPlan:[],
    setAddToPlan:()=>{},
    saveToLater:[],
    setSaveToLater:()=>{}

})

const WorkoutProvider = ({children}:{children:ReactNode}) => {

    const [addToPlan, setAddToPlan] = useState<WorkoutType[]> ([]);
    const [saveToLater,setSaveToLater]= useState<WorkoutType[]>([]);


    const sharedContext= {
        addToPlan, setAddToPlan ,
        saveToLater,setSaveToLater,
    }


    return (
        <WorkoutContext.Provider value={sharedContext}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;