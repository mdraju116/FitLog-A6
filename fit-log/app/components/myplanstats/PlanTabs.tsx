"use client";


import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { WorkoutType } from "@/app/types/workoutType";

import PlanStats from "./PlanStats";
import PlanCard from "./PlanCard";
import Link from "next/link";

interface Props {
    addToPlan: WorkoutType[];
    saveToLater: WorkoutType[];
}

type SortOption = "Duration" | "Calories" | "Rating";

const PlanTabs = ({ addToPlan, saveToLater }: Props) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const activeTab = searchParams.get("tab") === "saved" ? "saved" : "plan";


    const [sortBy, setSortBy] = useState<SortOption>("Duration");

    // Select workouts according to active tab
    const currentWorkouts = activeTab === "plan" ? addToPlan : saveToLater;

    // Sort workouts
    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "Duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "Calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === "Rating") {
            return b.rating - a.rating;
        }

        return 0;
    });

    return (
        <div>

            {/* Stats */}
            <PlanStats workouts={currentWorkouts} />

            {/* Tabs + Sorting */}
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                {/* Tabs */}
                <div className="rounded-xl bg-[#1e2127] p-1">
                    <div className="flex">

                        {/* Today's Plan */}
                        <button
                            onClick={() => router.push("/myplan")}
                            className={`rounded-xl px-4 py-2 text-sm font-medium cursor-pointer transition ${activeTab === "plan"
                                ? "bg-[#ccff00] text-black"
                                : "text-[#8a92a0] hover:text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        {/* Saved */}
                        <button
                            onClick={() => router.push("/myplan?tab=saved")}
                            className={`rounded-xl px-4 py-2 text-sm font-medium cursor-pointer transition ${activeTab === "saved"
                                    ? "bg-[#ccff00] text-black"
                                    : "text-[#8a92a0] hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>
                </div>

                {/* Sorting */}
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <h2 className="text-sm font-medium text-[#8a92a0]">
                        Sort By
                    </h2>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(e.target.value as SortOption)
                        }
                        className="select rounded-xl border border-[#2a2d34] bg-[#1e2127] text-white"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Workout List */}
            <div className="mt-6">

                {sortedWorkouts.length > 0 ? (
                    <div className="space-y-4">
                        {sortedWorkouts.map((workout) => (
                            <PlanCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyState activeTab={activeTab} />
                )}

            </div>
        </div>
    );
};



interface EmptyStateProps {
    activeTab: "plan" | "saved";
}

const EmptyState = ({ activeTab }: EmptyStateProps) => {
    return (
        <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-[#3a3d44] bg-[#111318] px-6 text-center">

            <h2 className="text-xl font-bold text-white">
                NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-md text-sm text-[#8a92a0]">
                {activeTab === "plan"
                    ? "Browse the library and add a lift to get today moving."
                    : "Save a workout for later and it will appear here."}
            </p>

            <Link href={"/"} className="mt-5 rounded-xl bg-[#ccff00] px-5 py-3 font-medium text-black">
                Go to Workouts
            </Link>

        </div>
    );
};

export default PlanTabs;