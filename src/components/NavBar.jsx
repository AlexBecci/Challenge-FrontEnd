import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

function NavBar() {
  return (
    <header className="fixed text-gray-400 body-font bg-black w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center absolute">
        <p className="flex title-font font-medium items-center text-zinc-200 mb-4 md:mb-0 ml-3 text-4xl lg:pl-0">
          B
        </p>
        <nav className="md:ml-auto md:mr-auto lg:mx-auto flex flex-wrap items-center text-base justify-center font-normal">
          <a
            href="#s"
            className="mr-3 hover:border-b border-b-gray-600  hover:text-white hover:font-bold"
          >
            Cursos
          </a>
          <a
            href="#s"
            className="mr-3 hover:border-b border-b-gray-600  hover:text-white hover:font-bold"
          >
            Quienes somos
          </a>
          <a
            href="#s"
            className="mr-3 hover:border-b border-b-gray-600  hover:text-white hover:font-bold"
          >
            noticias frescas
          </a>
          <a
            href="#s"
            className="mr-3 hover:border-b border-b-gray-600  hover:text-white hover:font-bold"
          >
            #Wearedoers
          </a>
          <a
            href="#s"
            className=" hover:border-b border-b-gray-600  hover:text-white hover:font-bold"
          >
            Contacto
          </a>
          <div className="pl-10 md:-mr-36">
            <a
              href="#mail"
              className="mr-0 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200"
            >
              <HiOutlineMail className="" size={25} />
            </a>
            <a
              href="#mail"
              className="mx-2 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200"
            >
              <AiOutlineInstagram className="" size={25} />
            </a>
            <a
              href="#mail"
              className="mr-12 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200"
            >
              <TbWorld className="" size={25} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
