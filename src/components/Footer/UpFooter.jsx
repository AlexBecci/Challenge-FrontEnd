import React from "react";

function UpFooter() {
  return (
    <div className={`bg-rose-600 lg:-mt-2`}>
      <div className="container lg:px-5 lg:py-3 lg:mx-auto flex items-center justify-center sm:flex-row flex-wrap md:mr-20 md:ml-9">
        <p className="cursor-pointer lg:text-sm  sm:ml-7 sm:mt-0 my-2 sm:my-2 lg:my-0 lg:md-0 border-l-2 border-r-2 border-black px-3">
          Cursos
        </p>
        <p className="cursor-pointer lg:text-sm  sm:ml-0 sm:mt-0 my-2 sm:my-2 lg:my-0 lg:md-0   border-black px-3">
          Quienés somos
        </p>
        <p className="cursor-pointer lg:text-sm  sm:ml-0 sm:mt-0 my-2 sm:my-2 lg:my-0 lg:md-0 border-l-2 border-r-2 lg:border-r-0 border-black px-3">
          Noticias Frescas
        </p>
        <p className="cursor-pointer lg:text-sm  sm:ml-0 sm:mt-0 my-0 mb-2 sm:my-2 lg:my-0 lg:md-0 border-l-2  border-black px-3">
          #Wearedoers
        </p>
        <p className="cursor-pointer lg:text-sm  sm:mr-7 sm:mt-0 my-0 mb-2 sm:my-2 lg:my-0 lg:md-0 border-l-2 border-r-2 border-black px-3">
          Contacto
        </p>
      </div>
    </div>
  );
}

export default UpFooter;
