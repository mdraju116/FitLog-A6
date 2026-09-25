
import Banner from "./components/homepage/Banner";
import WorkoutLibrary from "./components/homepage/WorkoutLibrary";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
       <Banner></Banner>
       <WorkoutLibrary></WorkoutLibrary>
       <ToastContainer />
    </div>
  );
}
