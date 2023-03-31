import React from "react";

function CardNotices({ text, img, date, height }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 px-3 md:py-0 py-5">
      <div className="h-full   overflow-hidden">
        <img
          className={`${height} md:h-36 w-full object-cover object-center border-4 border-black`}
          src={img}
          alt="blog"
        />
        <div className="py-0 px-0.5">
          <h1 className="title-font text-lg font-semibold text-black mb-1">
            {text}
          </h1>
          <div className="flex items-center flex-wrap ">
            <span className="text-gray-500 inline-flex items-center leading-none text-xs mx-0">
              Publicado:{date}  .
            </span>
            <a
              href="#leerMas"
              className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 mx-auto"
            >
              Leer más
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNotices;
