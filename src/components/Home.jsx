import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { FiMessageSquare, FiHexagon } from "react-icons/fi";
import { BsHexagon } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { AiOutlineMinusCircle } from "react-icons/ai";

function Home() {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-black">
      <div className="container px-5 py-12 pb-0 mb-0 mx-auto">
        <FaAsterisk size={20} className="text-blue-800  hover:animate-spin " />
        <div className="flex flex-wrap -m-12 border-t border-gray-600 my-12 ">
          <div className="p-12 md:w-1/2 flex flex-col items-center sm:pl-80 ">
            <AiOutlineMinusCircle className="text-gray-500 w-12 h-12 hover:animate-spin lg:mr-96" />
            <div className="md:mx-0 mx-28">
              <h2 className="sm:text-9xl  title-font font-medium  md:-mt-24  px-4 text-3xl font-serif leading-none   text-white md:ml-20 md:pl-14">
                Brother
              </h2>
              <h2 className="sm:text-9xl  title-font font-medium  mt-2  px-4 text-3xl font-serif leading-none   text-zinc-700 ">
                Madrid
              </h2>
              <h2 className=" text-center py-2 md:text-2xl font-serif my-auto leading-none  text-white">
                Doers School
                <br />
                <span>
                  <p className="text-white ">
                    <BsArrowDown
                      className="hover:scale-125 duration-500 animate-bounce mx-auto md:mt-36 md:-mb-10 mb-20 mt-10"
                      size={40}
                    />
                  </p>
                </span>
              </h2>
            </div>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start lg:pl-72">
            <div className="mt-0 text-gray-400">
              <div className="py-1 scale-95 text-center flex flex-row  mb-10">
                <div className="mx-20">
                  <BsHexagon
                    className="text-orange-600 absolute -mt-40"
                    size={200}
                  ></BsHexagon>
                  <div className="">
                    <h3 className="text-2xl font-semibold group-hover:text-black  text-orange-600 mx-10 -mt-40 py-16 px-4 mb-5">
                      Ultimos
                      <br /> Lugares
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0 text-gray-400">
              <div className="border-t border-t-gray-500 border-b-gray-500 border-b px-2 py-1 border-l-4 border-l-orange-500 rounded-sm group hover:bg-white hover:border-gray-100 hover:border-l-orange-700  duration-500 cursor-pointer scale-95  ">
                <h3 className="text-2xl font-semibold group-hover:text-black  text-white ">
                  Curso Anual de Creatividad
                </h3>

                <p className="group-hover:text-gray-900">
                  Hay plazas disponibles.
                  <br />
                  Apuntate
                </p>
                <BsArrowDown
                  size={20}
                  className="-rotate-90 text-white group-hover:text-black group-hover:animate-pulse"
                />
              </div>
            </div>
            <div className="-mt-1.5 text-gray-400">
              <div className=" border-b-gray-500 border-b px-2 py-1 border-l-4 border-l-orange-500 rounded-sm group hover:bg-white hover:border-gray-100 hover:border-l-orange-700 duration-500 cursor-pointer scale-95 ">
                <h3 className="text-2xl font-semibold group-hover:text-black  text-white ">
                  Planificacion y Estrategia Creativa
                </h3>
                <p className="group-hover:text-gray-900">
                  Quedan pocas plazas. No te quedes fuera!
                </p>
                <BsArrowDown
                  size={20}
                  className="-rotate-90 text-white group-hover:text-black group-hover:animate-pulse "
                />
              </div>
            </div>
            <h1 className=" px-20 cursor-pointer text-slate-500">
              // Ver todos los cursos
            </h1>
            <div className="">
              <button className="lg:mx-20 mt-5 flex flex-row items-center bg-blue-600 text-white py-2 px-5 rounded-tl-xl text-sm font-semibold rounded-bl-sm hover:scale-105 duration-300 hover:bg-yellow-500">
                <FiMessageSquare size={20} className="mr-1" />
                Hola, Bro :)
              </button>
            </div>
          </div>
          <div>
            <div className=" rotate-45">
              <FiHexagon className="text-yellow-300 w-24 h-24 hover:animate-spin -mt-80 ml-16 " />
            </div>
          </div>
          <div>
            <div className="">
              <BsFillCircleFill className="text-rose-500 w-16 h-16 hover:animate-bounce -mt-40 pr-10 " />
            </div>
          </div>
          <div className="ml-80">
            <FaAsterisk className="text-blue-800 w-12 h-12 hover:animate-spin ml-80 -mr-80 -mt-96 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
