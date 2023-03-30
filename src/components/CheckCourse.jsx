import React from "react";

function CheckCourse({ emoji, arrow, background, text, textColor }) {
  return (
    <div className={`body-font ${background}`}>
      <div className="container px-5 py-3 mx-auto flex items-center justify-start sm:flex-row flex-col md:mr-20 md:-ml-9">
        <p className="text-sm  sm:ml-7 sm:mt-0 mt-4">{arrow}</p>
        <p className="text-sm sm:ml-7 sm:mt-0 mt-4">{emoji}</p>
        <p className={`text-xl ${textColor} sm:ml-7 sm:mt-0 mt-4`}>{text}</p>
        <p className="text-sm  sm:ml-7 sm:mt-0 mt-4">{arrow}</p>
        <p className="text-sm sm:ml-7 sm:mt-0 mt-4">{emoji}</p>
        <p className={`text-xl ${textColor} sm:ml-7 sm:mt-0 mt-4`}>{text}</p>
        <p className="text-sm  sm:ml-7 sm:mt-0 mt-4">{arrow}</p>
        <p className="text-sm sm:ml-7 sm:mt-0 mt-4">{emoji}</p>
        <p className={`text-xl ${textColor} sm:ml-7 sm:mt-0 mt-4`}>{text}</p>
      </div>
    </div>
  );
}

export default CheckCourse;
