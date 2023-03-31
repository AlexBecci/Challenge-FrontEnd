import React from "react";
import BearMisc from "./BearMisc";
function ImageTitle() {
  return (
    <div className="h-full  px-0  rounded">
      <div
        className="lg:-ml-8 -ml-9 bg-orange-100
                w-1/2"
      >
        <p className="md:text-6xl text-5xl font-light title-font text-gray-900 py-16 mb-24 text-center lg:mx-16 px-1">
          #Sosloqueahacés
        </p>
        <div className="hover:animate-pulse md:ml-10">
          <BearMisc/>
        </div>
      </div>
    </div>
  );
}

export default ImageTitle;
