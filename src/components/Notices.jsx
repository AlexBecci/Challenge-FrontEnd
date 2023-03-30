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
    <section className="text-gray-600 body-font bg-orange-50">
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
            height={"lg:h-72"}
          />
          <CardNotices
            text="Dos alumnas de Brother crean la primera manifestacion feminista en Twich"
            img={blackAndWhite}
            date=" 04/04/2022"
            height={"lg:h-40"}
          />
          <CardNotices
            text="Brother Presenta <Pinta y Colorea>: el ciclo con el mejor talento grafico de madrid"
            img={pintaColorea}
            date=" 04/04/2022"
            height={"lg:h-64"}
          />
          <CardNotices
            text="Las nuevas ideas llegan a correos gracias a los alumnos de Brother"
            img={alumnosBrother}
            date=" 04/04/2022"
            height={"lg:h-48"}
          />
          <CardNotices
            text="Chin chin por nuestra plata en el #hackforgood del cdec"
            img={peopleEvent}
            date=" 04/04/2022"
            height={"lg:h-40"}
          />
          <CardNotices
            text="#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MAS FEO DEL MUNDO"
            img={sillonImage}
            date=" 04/04/2022"
            height={"lg:h-72"}
          />
          <CardNotices
            text="Somosla escuela con mas finalistas en el Festival CDEC(otra vez :) )"
            img={genteSillonImage}
            date=" 04/04/2022"
            height={"lg:h-36"}
          />
          <CardNotices
            text="TEST PRUEBA PELITGROOOOO"
            img={beerBrother}
            date=" 04/04/2022"
            height={"lg:h-80"}
          />
        </div>
      </div>
    </section>
  );
}

export default Notices;
