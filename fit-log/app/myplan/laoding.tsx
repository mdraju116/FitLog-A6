



const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
      <span className="loading loading-spinner text-[#c2f800]"></span>

      <p className="text-sm text-[#8a92a0]">
        Loading Workouts...
      </p>
    </div>
  );
};

export default Loading;