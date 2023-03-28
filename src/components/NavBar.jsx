import React from "react";
import { HiOutlineMail} from "react-icons/hi";

function NavBar() {
  return (
    <header className="text-gray-400 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center text-zinc-200 mb-4 md:mb-0 ml-3 text-4xl lg:pl-48">
          B
        </p>
        <nav className="md:ml-auto md:mr-auto lg:ml-72 flex flex-wrap items-center text-base justify-center font-normal">
          <a href="#s" className="mr-3 hover:border-b-2 border-b-gray-600  hover:text-white hover:font-bold">
            Cursos
          </a>
          <a href="#s" className="mr-3 hover:border-b-2 border-b-gray-600  hover:text-white hover:font-bold">
            Quienes somos
          </a>
          <a href="#s" className="mr-3 hover:border-b-2 border-b-gray-600  hover:text-white hover:font-bold">
            noticias frescas
          </a>
          <a href="#s" className="mr-3 hover:border-b-2 border-b-gray-600  hover:text-white hover:font-bold">
            #Wearedoers
          </a>
          <a href="#s" className=" hover:border-b-2 border-b-gray-600  hover:text-white hover:font-bold">
            Contacto
          </a>
        </nav>
        <div className="md:mr-20 ">
          <a href="#mail" className="mr-0 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200">
            <HiOutlineMail className="" size={25}/>
          </a>
          <a href="#mail" className="mx-2 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200">
            <HiOutlineMail className="" size={25}/>
          </a>
          <a href="#mail" className="mr-12 inline-flex items-center  border-0 py-2 px-0  rounded mt-4 md:mt-0 hover:text-white hover:scale-105 duration-200">
            <HiOutlineMail className="" size={25}/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
