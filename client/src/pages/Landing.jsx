import React from 'react'

export default function Landing() {
  return (
    <div className="min-h-[90vh] lg:ml-30 lg:mr-30 ml-10 mr-10   flex flex-col lg:flex-row justify-center items-center text-sans gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-[60%] text-left space-y-8 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 leading-tight self-start">
          <span className="bg-gradient-to-r from-[#1A73E8] to-[#F9AB00] bg-clip-text text-transparent">
            Student
          </span>{" "}
          Services, Simplified
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-900 leading-relaxed">
          Your campus services, now more accessible than ever.
        </p>

         <div className="mt-6 flex flex-row gap-4 sm:flex-nowrap">
          <button className="bg-[#1A73E8] hover:bg-[#1557B0] text-white font-medium py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-[10px] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
            Begin Service Request
          </button>
          <button className="border border-[#1A73E8] text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white font-medium py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-[10px] transition-all duration-300 cursor-pointer">
            Manage Queue
          </button>
        </div>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[40%] justify-center lg:justify-end items-center hidden lg:flex">
       <img
        src="public/assets/logoLanding.svg" alt="Landing Illustration"className=" w-[80%] sm:w-[70%] md:w-[60%] lg:w-[83%] h-auto max-w-md lg:max-w-full"
      />
      </div>
    </div>
  );
}
