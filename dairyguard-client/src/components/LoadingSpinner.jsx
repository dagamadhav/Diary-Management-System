import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="bg-prigmayBG">
      <div className="h-screen flex items-center justify-center">
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full bg-gray-100 bg-gradient-to-r from-gray-400 to-gray-100"></div>
        <div className="skeleton h-4 w-28 bg-gray-100 bg-gradient-to-r from-gray-400 to-gray-100"></div>
        <div className="skeleton h-4 w-full bg-gray-100 bg-gradient-to-r from-gray-400 to-gray-100"></div>
        <div className="skeleton h-4 w-full bg-gray-100 bg-gradient-to-r from-gray-400 to-gray-100"></div>
      </div>
    </div>
    </div>
  );
};

export default LoadingSpinner;

