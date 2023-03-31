import React from "react";

function TitleFooter() {
  return (
    <div className="order-first lg:order-none lg:w-1/5 title-font font-serif  items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 md:-mt-2 flex flex-col">
      <h1 className="text-xl sm:text-5xl ml-3 text-white">Brother</h1>
      <p className=" text-xs px-1 pb-0 -mt-1 text-zinc-400">Doers School</p>
      <a
        href="#Cookies"
        className="py-4 text-sm hover:text-yellow-200 duration-500 text-zinc-600"
      >
        Política de Cookies
      </a>
    </div>
  );
}

export default TitleFooter;
