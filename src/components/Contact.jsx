import React from "react";
import BearMisc from "./Contact/BearMisc";
import { IoIosArrowDown } from "react-icons/io";
function Contact() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Contact
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-red-100 p-8  rounded">
              <BearMisc />
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full  p-8 rounded">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                ¿Quieres saber más sobre nuestros cursos?
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Completá este formulario
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Nombre*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-b-2 border-b-gray-300 focus:border-b-rose-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Escribe tu nombre"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Teléfono*
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className="w-full border-b-2 border-b-gray-300 focus:border-b-rose-600  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Escribe tu telefono"
                />
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full  border-b-2 border-b-gray-300 focus:border-b-rose-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Escribe tu correo electrónico"
                />
              </div>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Curso de interés
                </label>
                <div className="border-2 border-gray-500 focus:border-gray-900 text-base outline-none text-black py-0 pr-2 leading-8 transition-colors duration-200 ease-in-out flex flex-row">
                  <input
                    type="text"
                    id="course"
                    name="course"
                    className="w-full border-r-2 border-r-gray-500 focus:border-r-gray-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Seleccioná un curso"
                  />
                  <div className="hover:text-black cursor-pointer hover:scale-105">
                    <IoIosArrowDown className="my-3 ml-1.5 " />
                  </div>
                </div>
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full  border-b-2 border-b-gray-300 focus:border-b-rose-600  h-10 text-base outline-none text-black py-1.5 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Escribe un mensaje adicional"
                ></textarea>
              </div>
              <p className="text-xs text-gray-800 py-0 pb-5">
                *datos obligatorios
              </p>
              <button className="text-gray-700 hover:text-gray-900  bg-white border-2 py-1 px-10  hover:bg-zinc-100 text-base border-gray-950">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
