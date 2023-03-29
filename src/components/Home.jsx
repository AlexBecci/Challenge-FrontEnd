import React from "react";
import { BsArrowDown } from "react-icons/bs";

function Home() {
  return (
    <section>
      <div className=" my-10 pb-4"></div>

      <div className="relative mx-auto max-w-7xl border-t border-gray-600   pb-10 font-serif  ">
        <div className="border-b border-gray-600 mb-5">
          <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none   ">
            <div className="flex flex-col mb-12 mt-10 overflow-hidden ">
              <div className="flex flex-col justify-between flex-1">
                <div className="flex-1">
                  <p className="block mt-2 space-y-2 ml-64">
                    <h3 className=" px-2 text-8xl font-serif leading-none   text-white">
                      Brother
                    </h3>
                    <h3 className=" text-8xl font-serif leading-none  text-zinc-700">
                      Madrid
                    </h3>
                    <h2 className=" text-center py-20 text-2xl font-serif  leading-none  text-white">
                      Doers School
                    </h2>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="flex flex-col mb-12 overflow-hidden ">
                <div className="flex-shrink-0"></div>
                <div className="flex flex-col justify-between flex-1"></div>
              </div>

              <div className="flex flex-col mb-12 overflow-hidden items-center  ">
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex-1">
                    <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                      <div className="border-8 w-40 h-w-40 border-orange-700 transform rotate-45 p-8 -mt-20 absolute">
                        <div className="-ml-6 py-1">
                          <h3 className="transform -rotate-45 text-4xl font-serif leading-none  text-orange-700 ">
                            Ultimos <br />
                            Lugares
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-36 text-gray-400">
                      <div className="border border-gray-500 p-2 border-l-4 border-l-orange-500 rounded-sm group hover:bg-white hover:border-gray-100 hover:border-l-orange-700  duration-300 scale-95 hover:scale-100 ">
                        <h3 className="text-2xl font-semibold group-hover:text-black  text-white ">
                          Curso Anual de Creatividad
                        </h3>

                        <p className="group-hover:text-gray-900">
                          Hay plazas disponibles. <br />
                          Apuntate
                        </p>
                        <BsArrowDown
                          size={20}
                          className="-rotate-90 text-white group-hover:text-black"
                        />
                      </div>
                    </div>
                    <div className="mt-1 text-gray-400">
                      <div className="border border-gray-500 p-2 border-l-4 border-l-orange-500 rounded-sm group hover:bg-white hover:border-gray-100 hover:border-l-orange-700 duration-300 scale-95 hover:scale-100 ">
                        <h3 className="text-2xl font-semibold group-hover:text-black  text-white ">
                          Curso Anual de Creatividad
                        </h3>
                        <p className="group-hover:text-gray-900">
                          Hay plazas disponibles. <br />
                          Apuntate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex justify-end">
          <h1 className=" px-20">Ver todos los cursos</h1>
        </div>
        <div className="ml-96 mr-96 px-8 py-20">
          <p className="text-white ">
            <BsArrowDown className="hover:scale-125 duration-500" size={40} />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
