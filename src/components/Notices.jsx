import React from "react";
import CardNotices from "./Notices/CardNotices";
import bThinker from "../images/bThinker.jpg";
import blackAndWhite from "../images/blackAndWhite.jpg";
import pintaColorea from "../images/pintaColorea.jpg";
import alumnosBrother from "../images/alumnosBrother.jpg";
import peopleEvent from "../images/peopleEvent.jpg";
import sillonImage from "../images/sillonImage.jpg";
import genteSillonImage from "../images/genteSillonImage.jpg";
import beerBrother from "../images/beerBrother.jpg";





function Notices() {
  return (
    <section className="text-gray-600 body-font bg-slate-200">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap w-full mb-20 justify-center text-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-normal title-font mb-2 text-gray-900">
              Noticias Frescas
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap mx-4 px-2">
          <CardNotices
            text="Chin chin por nuestra plata en el #hackforgood del cdec"
            img={bThinker}
            date=" 04/04/2022"
            height={48}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={blackAndWhite}
            date=" 04/04/2022"
            height={36}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={pintaColorea}
            date=" 04/04/2022"
            height={48}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={alumnosBrother}
            date=" 04/04/2022"
            height={40}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={peopleEvent}
            date=" 04/04/2022"
            height={40}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={sillonImage}
            date=" 04/04/2022"
            height={48}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={genteSillonImage}
            date=" 04/04/2022"
            height={40}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={beerBrother}
            date=" 04/04/2022"
            height={48}
          />
        </div>
      </div>
    </section>
  );
}

export default Notices;
