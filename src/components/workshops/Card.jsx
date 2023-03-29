import React from "react";

function Card({name,img}) {
  return (

      <div className="lg:w-48 md:w-1/2 p-4 w-full">
        <a href="#s" className="block relative h-40 rounded overflow-hidden">
          <img
            alt="img the card"
            className="object-cover object-center w-full h-full block"
            src={img}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-700 text-sm tracking-widest font-normal mb-1">
            {name}
          </h3>
        </div>
      </div>
  );
}

export default Card;
