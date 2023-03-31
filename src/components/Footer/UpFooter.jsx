import React from "react";

function UpFooter() {
  return (
    <div className={`bg-rose-600 -mt-2`}>
      <div className="container px-5 py-3 mx-auto flex items-center justify-center sm:flex-row flex-col md:mr-20 md:ml-9">
        <p className="cursor-pointer text-sm  sm:ml-7 sm:mt-0 mt-4 border-l-2 border-r-2 border-black px-3">
          Cursos
        </p>
        <p className="cursor-pointer text-sm  sm:ml-0 sm:mt-0 mt-4   border-black px-3">
          Quienés somos
        </p>
        <p className="cursor-pointer text-sm  sm:ml-0 sm:mt-0 mt-4 border-l-2  border-black px-3">
          Noticias Frescas
        </p>
        <p className="cursor-pointer text-sm  sm:ml-0 sm:mt-0 mt-4 border-l-2  border-black px-3">
          #Wearedoers
        </p>
        <p className="cursor-pointer text-sm  sm:mr-7 sm:mt-0 mt-4 border-l-2 border-r-2 border-black px-3">
          Contacto
        </p>
      </div>
    </div>
  );
}

export default UpFooter;
