import React from "react";

function CheckCourse({ emoji, arrow, background }) {
  return (
    <div className="text-gray-600 body-font bg-black">
      <div className="">
        <div className="container px-5 py-6 mx-auto flex items-center justify-start sm:flex-row flex-col">
          <p className="flex title-font font-medium  justify-start items-start text-yellow-500">
            <span className="ml-3 text-xl">{emoji}</span>
          </p>
          <p className="text-sm text-yellow-500 sm:ml-10 sm:mt-0 mt-4">
            Chequea todos los cursos
          </p>
          <p className="flex title-font font-medium  justify-center items-center text-yellow-500">
            <span className="ml-3 text-xl">Tailblocks</span>
          </p>
          <p className="text-sm text-yellow-500 sm:ml-10 sm:mt-0 mt-4">
            Chequea todos los cursos
          </p>
          <p className="flex title-font font-medium  justify-center items-center text-yellow-500">
            <span className="ml-3 text-xl">Tailblocks</span>
          </p>
          <p className="text-sm text-yellow-500 sm:ml-10 sm:mt-0 mt-4">
            Chequea todos los cursos
          </p>
          <p className="flex title-font font-medium  justify-center items-center text-yellow-500">
            <span className="ml-3 text-xl">Tailblocks</span>
          </p>
          <p className="text-sm text-yellow-500 sm:ml-10 sm:mt-0 mt-4">
            Chequea todos los cursos
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckCourse;
