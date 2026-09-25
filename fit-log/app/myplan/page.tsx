"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";

import PlanTabs from "@/app/components/myplanstats/PlanTabs";

const MyPlanPage = () => {
  const { addToPlan, saveToLater } = useContext(WorkoutContext);

  return (
    <div className="container mx-auto my-8 px-4 sm:px-16 lg:px-24">

      {/* Page Header */}
      <h1 className="text-[30px] font-bold text-white">
        MY PLAN
      </h1>

      <p className="text-[16px] font-normal text-[#b1b5bb]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Tabs + Stats + Cards */}
      <div className="mt-6">
        <PlanTabs
          addToPlan={addToPlan}
          saveToLater={saveToLater}
        />
      </div>

    </div>
  );
};

export default MyPlanPage;