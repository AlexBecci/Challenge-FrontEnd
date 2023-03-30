import React from "react";
import CardNotices from "./Notices/CardNotices";

import news1 from "../images/News/news-01.jpg";
import news2 from "../images/News/news-02.jpg";
import news3 from "../images/News/news-03.jpg";
import news4 from "../images/News/news-04.jpg";
import news6 from "../images/News/news-05.jpg";
import news5 from "../images/News/news-06.jpg";
import news7 from "../images/News/news-07.jpg";
import news8 from "../images/News/news-08.jpg";

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
            img={news1}
            date=" 04/04/2022"
            height={"lg:h-72"}
          />
          <CardNotices
            text="Dos alumnas de Brother crean la primera manifestacion feminista en Twich"
            img={news2}
            date=" 04/04/2022"
            height={"lg:h-40"}
          />
          <CardNotices
            text="Brother Presenta <Pinta y Colorea>: el ciclo con el mejor talento grafico de madrid"
            img={news3}
            date=" 04/04/2022"
            height={"lg:h-64"}
          />
          <CardNotices
            text="Las nuevas ideas llegan a correos gracias a los alumnos de Brother"
            img={news4}
            date=" 04/04/2022"
            height={"lg:h-48"}
          />
          <CardNotices
            text="Chin chin por nuestra plata en el #hackforgood del cdec"
            img={news5}
            date=" 04/04/2022"
            height={"lg:h-40"}
          />
          <CardNotices
            text="#PROHIBIDOFIJARCARTELES: UNA NUEVA OPORTUNIDAD PARA EL CARTEL MAS FEO DEL MUNDO"
            img={news6}
            date=" 04/04/2022"
            height={"lg:h-72"}
          />
          <CardNotices
            text="Somos la escuela con mas finalistas en el Festival CDEC(otra vez :) )"
            img={news7}
            date=" 04/04/2022"
            height={"lg:h-36"}
          />
          <CardNotices
            text="Nueva representacion del kingdom a cargo del Ilustrador asis percales"
            img={news8} 
            date=" 04/04/2022"
            height={"lg:h-80"}
          />
        </div>
      </div>
    </section>
  );
}

export default Notices;
