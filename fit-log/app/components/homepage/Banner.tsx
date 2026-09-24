import Image from "next/image";

import heroImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 sm:px-16 lg:px-26 my-6 sm:my-8 lg:my-10">
      <div className="hero bg-[#20252e] shadow-md py-4 sm:py-6 rounded-xl px-4 sm:px-6 lg:px-10">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse gap-8 lg:gap-12">

          {/* Hero Image */}
          <Image
            src={heroImg}
            alt="Hero Image"
            className="w-full max-w-70 sm:max-w-87 lg:max-w-md h-auto"
          />

          {/* Hero Content */}
          <div className="space-y-4 text-center lg:text-left">

            <h2 className="text-[#c2f800] text-base sm:text-xl font-medium">
              WORKOUT LIBRARY
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold leading-tight">
              TRAIN WITH INTENT. LOG <br /> EVERY SET.
            </h1>

            <p className="py-3 sm:py-4 text-[#9ca3af] text-base sm:text-[14px] lg:text-[16px] font-normal">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button className="btn bg-[#c2f800] text-black">
              BROWSE WORKOUTS
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;