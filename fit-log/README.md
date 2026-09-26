
# FitLog

A modern and responsive workout tracking application built with Next.js and TypeScript. FitLog allows users to explore workouts, view detailed exercise information, create a personalized daily workout plan, save workouts for later, and track completed exercises.

## 🚀 Live Demo

👉 [FitLog Live Demo](https://fit-log-tau-seven.vercel.app/)

## Technology Stack

* Next.js
* TypeScript
* React
* Tailwind CSS
* daisyUI
* React Icons
* React Toastify
* REST API
* Local Storage

## ✨ Key Features

* **Explore Workouts** — Browse a collection of workouts with information such as muscle groups, equipment, difficulty, duration, calories, and ratings.
* **Workout Details** — View detailed information and step-by-step instructions for each workout.
* **Today's Plan** — Add up to five workouts to your daily workout plan.
* **Save for Later** — Save workouts that you want to try later.
* **Workout Statistics** — Track active exercises, total workout minutes, and estimated calories.
* **Sorting** — Sort workouts by duration, calories, or rating.
* **Persistent Data** — Workout plans, saved workouts, and completion status are preserved using browser local storage.
* **Responsive Design** — Fully responsive layout that works across desktop, tablet, and mobile devices.


## 📂 Project Structure

```text
FitLog/
│
├── public/
│
├── app/
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── Banner.tsx
│   │   │   └── WorkoutLibrary.tsx
│   │   │
│   │   ├── myplanstats/
│   │   │   ├── PlanCard.tsx
│   │   │   ├── PlanStats.tsx
│   │   │   └── PlanTabs.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── WorkoutLibraryCard.tsx
│   │   │
│   │   └── workout-details-btns/
│   │       ├── AddToPlanBtn.tsx
│   │       └── SaveForLaterBtn.tsx
│   │
│   ├── context/
│   │   └── WorkoutContext.tsx
│   │
│   ├── workout-details/
│   │   └── [workoutid]/
│   │       └── page.tsx
│   │
│   ├── myplan/
│   │   └── page.tsx
│   │
│   ├── types/
│   │   └── workoutType.ts
│   │
│   ├── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── assets/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🔗 API

FitLog uses a REST API to fetch workout information.

```text
https://api.abcz.workers.dev/api/fitlog
```

Individual workout details are fetched using:

```text
https://api.abcz.workers.dev/api/fitlog/{id}
```



## 👨‍💻 Author

**Md. Raju Ahammed**

GitHub: https://github.com/mdraju116
