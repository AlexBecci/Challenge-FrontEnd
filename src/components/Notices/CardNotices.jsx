import React from "react";

function CardNotices({text,img,date, height}) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 ">
      <div className="h-full  border-opacity-60 rounded-lg overflow-hidden">
          <img className={`${height} md:h-36 w-full object-cover object-center border-4 border-black`} src={img} alt="blog"/>
          <div className="p-6">
        
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{text}</h1>
            <div className="flex items-center flex-wrap ">
              <span className="text-gray-500 inline-flex items-center leading-none text-xs mx-auto">
               Publicado:{date} .
              </span>
              <a href="#leerMas" className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 mx-auto">Leer mas
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
