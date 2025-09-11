import React from "react";

const LoaderMain = () => {
  return (
    <div className="flex flex-col w-full animate-pulse gap-3">
      {/* Image skeleton */}
      <div className="w-full aspect-[3/4] bg-neutral-400 rounded-xl" />
      {/* Text skeletons */}
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400 h-4 w-3/4 rounded-md" />
        <div className="bg-neutral-400 h-4 w-1/2 rounded-md" />
      </div>
    </div>
  );
};

export default LoaderMain;