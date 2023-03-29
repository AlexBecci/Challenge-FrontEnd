import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { FiMessageSquare, FiHexagon } from "react-icons/fi";
import { CgSlack } from "react-icons/cg";
import { BsFillCircleFill } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Home() {
  return (
    <div className="bg-black">
      <div className=" py-10 pb-10 container"></div>
      <div className="relative mx-auto max-w-7xl border-t border-gray-600   pb-10 font-serif  ">
        <div className="border-b border-gray-600 mb-5">
          <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none   ">
            <div className="flex flex-col mb-12 mt-10 overflow-hidden ">
              <FaAsterisk className="text-red-500 w-10 h-10 hover:animate-spin mx-16" />
              <div className="-rotate-45">
                <FiHexagon className="text-yellow-300 w-24 h-24 hover:animate-spin " />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex-1">
                  <AiOutlineMinusCircle
                    size={30}
                    className="text-red-500 ml-56"
                  />
                  <p className="block mt-2 space-y-2 ml-64">
                    <h3 className=" px-4 text-8xl font-serif leading-none   text-white">
                      Brother
                    </h3>

                    <h3 className=" text-8xl font-serif leading-none  text-zinc-700">
                      Madrid
                    </h3>
                    <h2 className=" text-center py-20 text-2xl font-serif  leading-none  text-white">
                      Doers School
                    </h2>
                  </p>
                  <BsFillCircleFill
                    size={30}
                    className="text-red-500 mx-24 hover:animate-pulse"
                  />
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-6 text-white">
              <div className="flex flex-col mb-12 overflow-hidden ">
                <div className="flex-shrink-0"></div>
                <div className="flex flex-col justify-between flex-1">
                  <CgSlack className="w-14 h-14 hover:animate-spin duration-1000 text-blue-600" />
                </div>
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
                        <BsArrowDown
                          size={20}
                          className="-rotate-90 text-white group-hover:text-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex justify-end">
          <div>
            <h1 className=" px-20">Ver todos los cursos</h1>
            <div>
              <button className="mx-20 mt-5 flex flex-row items-center bg-blue-600 text-white py-2 px-5 rounded-tl-xl text-sm font-semibold rounded-bl-sm hover:scale-105 duration-300 hover:bg-yellow-500">
                <FiMessageSquare size={20} className="mr-1" />
                Hola, Bro :)
              </button>
            </div>
          </div>
        </div>
        <div className="ml-96 mr-96 px-8 py-5 pb-0">
          <p className="text-white ">
            <BsArrowDown
              className="hover:scale-125 duration-500 animate-bounce"
              size={40}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
